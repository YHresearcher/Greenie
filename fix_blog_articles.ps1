$files = @(
    'blog\vietnamese-qualified-cashews\index.html',
    'blog\vietnamese-ancient-tea\index.html',
    'blog\vietnamese-artisanal-cane-sugar\index.html'
)

foreach ($f in $files) {
    $c = Get-Content $f -Raw -Encoding UTF8
    
    # 1. Remove Samples from desktop nav
    $c = $c -replace '<a href="/#samples" class="nav-link">Samples</a> <a href="/#inquiry" class="nav-link">Inquiry</a>', '<a href="/#inquiry" class="nav-link">Inquiry</a>'
    
    # 2. Remove Samples from mobile nav
    $c = $c -replace '<a href="/#samples" class="mobile-link">Samples</a> <a href="/#inquiry" class="mobile-link">Inquiry</a>', '<a href="/#inquiry" class="mobile-link">Inquiry</a>'
    
    # 3. Remove "Request Samples" btn-secondary from article CTA box
    $c = $c -replace ' <a href="/#samples" class="btn-secondary">Request Samples</a>', ''
    
    # 4. Remove Request Samples from footer
    $c = $c -replace '<a href="/#inquiry">Send Inquiry</a> <a href="/#samples">Request Samples</a>', '<a href="/#inquiry">Send Inquiry</a>'
    
    Set-Content -Path $f -Value $c -Encoding UTF8 -NoNewline
    Write-Output "Fixed: $f"
}