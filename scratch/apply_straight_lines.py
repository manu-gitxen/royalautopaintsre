# 1. Update index.html
with open('d:/manu/projects/royalautopaintsre/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '<span class="each-object elementor-repeater-item-903f4f9   " style="background-image: url(images/floating-obj-4.png);"></span>',
    '<span class="each-object elementor-repeater-item-903f4f9 stat-column-divider"></span>'
)
content = content.replace(
    '<span class="each-object elementor-repeater-item-903f4f9   " style="background-image: url(images/floating-obj-5.png);"></span>',
    '<span class="each-object elementor-repeater-item-903f4f9 stat-column-divider"></span>'
)

with open('d:/manu/projects/royalautopaintsre/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

try:
    with open('d:/manu/projects/royal_paints_1/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
except Exception as e:
    print('Sync error index.html:', e)

# 2. Update css/custom.css
with open('d:/manu/projects/royalautopaintsre/css/custom.css', 'r', encoding='utf-8') as f:
    css = f.read()

divider_css = """
/* Stats section: clean normal vertical divider lines (replacing flower design) */
.elementor-element-3cac144 .elementor-widget-tm-ele-floating-objects .each-object,
.elementor-element-3cac144 .stat-column-divider {
  background-image: none !important;
  width: 1px !important;
  height: 160px !important;
  background-color: #0C2F251A !important;
  top: 20px !important;
  left: 0 !important;
  display: block !important;
  opacity: 1 !important;
}
"""

if 'stat-column-divider' not in css:
    css = css.rstrip() + "\n" + divider_css
    with open('d:/manu/projects/royalautopaintsre/css/custom.css', 'w', encoding='utf-8') as f:
        f.write(css)
    try:
        with open('d:/manu/projects/royal_paints_1/css/custom.css', 'w', encoding='utf-8') as f:
            f.write(css)
    except Exception as e:
        print('Sync error custom.css:', e)

print('Updated dividers to clean normal straight lines successfully!')
