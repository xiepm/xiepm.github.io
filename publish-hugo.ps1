$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$message = if ($args.Count -gt 0) { $args -join " " } else { "Publish Hugo site $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }

Push-Location $repoRoot
try {
    Write-Host "Building Hugo site..." -ForegroundColor Cyan
    & powershell -ExecutionPolicy Bypass -File ".\build-hugo.ps1"

    $branch = (git branch --show-current).Trim()
    if ([string]::IsNullOrWhiteSpace($branch)) {
        throw "Unable to determine current git branch."
    }

    Write-Host "Current branch: $branch" -ForegroundColor Cyan

    git add -A

    $changes = git status --porcelain
    if ($changes) {
        Write-Host "Creating commit..." -ForegroundColor Cyan
        git commit -m $message
    } else {
        Write-Host "No changes to commit. Skipping commit." -ForegroundColor Yellow
    }

    Write-Host "Pushing to origin/$branch ..." -ForegroundColor Cyan
    git push origin $branch

    Write-Host ""
    Write-Host "Publish request sent. GitHub Actions will build and deploy the site automatically." -ForegroundColor Green
    Write-Host "Check Actions on GitHub if you want to watch the deployment progress." -ForegroundColor Green
} finally {
    Pop-Location
}
