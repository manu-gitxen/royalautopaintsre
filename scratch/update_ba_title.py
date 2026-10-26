with open('d:/manu/projects/royalautopaintsre/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '<span class="title-part1 ">Before &amp; After Real Dermatology Transformation Results</span>',
    '<span class="title-part1 ">Before &amp; After Real Automotive Refinish Results</span>'
)

with open('d:/manu/projects/royalautopaintsre/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

try:
    with open('d:/manu/projects/royal_paints_1/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
except Exception as e:
    print('Sync error:', e)

print('Updated Before & After title successfully!')
