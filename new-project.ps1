param(
    [Parameter(Mandatory = $true)]
    [string]$Slug
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$localHugo = Join-Path $repoRoot ".tools\\hugo\\hugo.exe"
$hugo = if (Test-Path $localHugo) { $localHugo } else { "hugo" }

Push-Location $repoRoot
try {
    if (-not (Get-Command $hugo -ErrorAction SilentlyContinue)) {
        throw "Hugo not found. Put hugo.exe in .tools\\hugo\\ or install it in PATH."
    }
    & $hugo new ("projects/" + $Slug + ".md")
} finally {
    Pop-Location
}
