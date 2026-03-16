$ErrorActionPreference = "Stop"

function Invoke-Native {
    param(
        [Parameter(Mandatory = $true)]
        [string]$FilePath,

        [Parameter()]
        [string[]]$Arguments = @(),

        [string]$ErrorMessage = "Command failed."
    )

    & $FilePath @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "$ErrorMessage Exit code: $LASTEXITCODE"
    }
}

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$message = if ($args.Count -gt 0) { $args -join " " } else { "Publish Hugo site $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }

Push-Location $repoRoot
try {
    Write-Host "Building Hugo site..." -ForegroundColor Cyan
    Invoke-Native -FilePath "powershell" -Arguments @("-ExecutionPolicy", "Bypass", "-File", ".\build-hugo.ps1") -ErrorMessage "Hugo build failed."

    $branch = (git branch --show-current).Trim()
    if ([string]::IsNullOrWhiteSpace($branch)) {
        throw "Unable to determine current git branch."
    }

    Write-Host "Current branch: $branch" -ForegroundColor Cyan

    Invoke-Native -FilePath "git" -Arguments @("add", "-A") -ErrorMessage "git add failed."

    $changes = git status --porcelain
    if ($changes) {
        Write-Host "Creating commit..." -ForegroundColor Cyan
        Invoke-Native -FilePath "git" -Arguments @("commit", "-m", $message) -ErrorMessage "git commit failed."
    } else {
        Write-Host "No file changes detected. No new commit was created, so GitHub Pages will not redeploy." -ForegroundColor Yellow
        return
    }

    Write-Host "Pushing to origin/$branch ..." -ForegroundColor Cyan
    Invoke-Native -FilePath "git" -Arguments @("push", "origin", $branch) -ErrorMessage "git push failed. Check your network connection or GitHub authentication."

    Write-Host ""
    Write-Host "Push completed successfully." -ForegroundColor Green
    Write-Host "GitHub Actions will now build and deploy the site automatically." -ForegroundColor Green
    Write-Host "Open the Actions tab on GitHub to watch the deployment progress." -ForegroundColor Green
} finally {
    Pop-Location
}
