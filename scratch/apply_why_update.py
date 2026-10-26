with open('d:/manu/projects/royalautopaintsre/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Image
content = content.replace(
    'src="images/Image-2.jpg" class="attachment-large size-large wp-image-6567" alt="" srcset="images/Image-2.jpg 583w, images/Image-2-234x300.jpg 234w"',
    'src="images/Spray_gun_emitting_mist.jpg" class="attachment-large size-large wp-image-6567" alt="Royal Auto Paints Professional Refinish" srcset="images/Spray_gun_emitting_mist.jpg 583w"'
)

# 2. Section Heading
content = content.replace(
    '<span class="title-part1 ">Why Clients Trust Our Dermatology Care</span>',
    '<span class="title-part1 ">Why Clients Trust Royal Auto Paints</span>'
)

# 3. Card 1
content = content.replace(
    '<i aria-hidden="true" class=" flaticon-set-face-cream"></i>',
    '<i aria-hidden="true" class="fas fa-eye-dropper"></i>'
)
content = content.replace(
    'Expert Skin Specialists\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">Use this free skin care themed &amp; text for your beauty product </div>',
    'Computerized Color Lab\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">Digital spectrophotometer color formulation matching over 150,000 international OEM paint codes.</div>'
)

# 4. Card 2
content = content.replace(
    '<i aria-hidden="true" class=" flaticon-set-ingredients"></i>',
    '<i aria-hidden="true" class="fas fa-warehouse"></i>'
)
content = content.replace(
    'Safe Clinical Procedures\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">Use this free skin care themed &amp; text for your beauty product </div>',
    'Local Doha Inventory\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">Immediate ex-stock availability in Street 23 Wakalat St for rapid delivery and zero workshop downtime.</div>'
)

# 5. Card 3
content = content.replace(
    '<i aria-hidden="true" class=" flaticon-set-skincare-1"></i>',
    '<i aria-hidden="true" class="fas fa-shield-alt"></i>'
)
content = content.replace(
    'Professional Skin Care\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">Use this free skin care themed &amp; text for your beauty product </div>',
    '100% Genuine Imports\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">Authorized distributor for Axalta, Challenger, and HB Body European refinish systems.</div>'
)

# 6. Card 4
content = content.replace(
    '<i aria-hidden="true" class=" flaticon-set-facial-treatment"></i>',
    '<i aria-hidden="true" class="fas fa-headset"></i>'
)
content = content.replace(
    'Patient First Approach\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">Use this free skin care themed &amp; text for your beauty product </div>',
    'Technical Field Support\t\t\t\t\t</h4>\n\t\t\t\t\t<div class="content">On-site technician assistance, spray booth engineering, and certified refinish consultation across Qatar.</div>'
)

# 7. Button
content = content.replace(
    '<a href="/dermisio/about/" class="btn-style2">',
    '<a href="#contact" class="btn-style2">'
)
content = content.replace(
    '<span class="theme-btn">\n\t\tSubmit Request  </span>',
    '<span class="theme-btn">\n\t\tRequest Wholesale Quote  </span>'
)

# 8. Hide leaf floating object
content = content.replace(
    '<div class="elementor-element elementor-element-2ff87b8 elementor-widget elementor-widget-tm-ele-floating-objects"',
    '<div class="elementor-element elementor-element-2ff87b8 elementor-widget elementor-widget-tm-ele-floating-objects" style="display: none;"'
)

with open('d:/manu/projects/royalautopaintsre/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Mirror to royal_paints_1 if exists
try:
    with open('d:/manu/projects/royal_paints_1/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
except Exception as e:
    print('Mirror error:', e)

print('Updated successfully!')
