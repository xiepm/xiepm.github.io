$ErrorActionPreference = "Stop"

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptRoot
$docsRoot = Join-Path $scriptRoot "docs"
$buildRoot = Join-Path $scriptRoot ".site"
$mkdocsConfig = Join-Path $scriptRoot "mkdocs.yml"

function Assert-Command($name) {
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
    throw "Missing command: $name"
  }
}

function Ensure-Directory($path) {
  if (-not (Test-Path $path)) {
    New-Item -ItemType Directory -Path $path | Out-Null
  }
}

function Sync-SharedAssets {
  $pairs = @(
    @{ Source = (Join-Path $repoRoot "stylesheets"); Target = (Join-Path $docsRoot "stylesheets") },
    @{ Source = (Join-Path $repoRoot "javascripts"); Target = (Join-Path $docsRoot "javascripts") },
    @{ Source = (Join-Path $repoRoot "images"); Target = (Join-Path $docsRoot "images") }
  )

  foreach ($pair in $pairs) {
    if (Test-Path $pair.Source) {
      Ensure-Directory $pair.Target
      robocopy $pair.Source $pair.Target /E /NFL /NDL /NJH /NJS /NC /NS | Out-Null
    }
  }
}

Assert-Command "mkdocs"
Assert-Command "robocopy"

Sync-SharedAssets

if (Test-Path $buildRoot) {
  Remove-Item -Recurse -Force $buildRoot
}

mkdocs build --clean --config-file $mkdocsConfig --site-dir $buildRoot

robocopy $buildRoot $repoRoot /E /NFL /NDL /NJH /NJS /NC /NS /XD .git site-src content | Out-Null

Write-Host "Build finished."
