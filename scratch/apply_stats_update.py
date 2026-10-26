with open('d:/manu/projects/royalautopaintsre/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix malformed data-settings in stats section
content = content.replace(
    'elementor-element-3cac144 e-con-full e-flex tm-col-stretched-none tm-bg-color-over-image e-con e-parent" data-id="3cac144" data-element_type="container" data-e-type="container" data-settings="{" background_background":"classic"}"=""',
    'elementor-element-3cac144 e-con-full e-flex tm-col-stretched-none tm-bg-color-over-image e-con e-parent" data-id="3cac144" data-element_type="container" data-e-type="container" data-settings=\'{"background_background":"classic"}\''
)

content = content.replace(
    'data-id="4b06ca6" data-element_type="container" data-e-type="container" data-settings="{" animation":"fadeinup","animation_delay":300}"=""',
    'data-id="4b06ca6" data-element_type="container" data-e-type="container" data-settings=\'{"_animation":"fadeinup","_animation_delay":300}\''
)
content = content.replace(
    'data-id="65ca50a" data-element_type="container" data-e-type="container" data-settings="{" animation":"fadeinup","animation_delay":500}"=""',
    'data-id="65ca50a" data-element_type="container" data-e-type="container" data-settings=\'{"_animation":"fadeinup","_animation_delay":500}\''
)
content = content.replace(
    'data-id="e1ae678" data-element_type="container" data-e-type="container" data-settings="{" animation":"fadeinup","animation_delay":700}"=""',
    'data-id="e1ae678" data-element_type="container" data-e-type="container" data-settings=\'{"_animation":"fadeinup","_animation_delay":700}\''
)
content = content.replace(
    'data-id="074fc97" data-element_type="container" data-e-type="container" data-settings="{" animation":"fadeinup","animation_delay":900}"=""',
    'data-id="074fc97" data-element_type="container" data-e-type="container" data-settings=\'{"_animation":"fadeinup","_animation_delay":900}\''
)

# Stat 1: Workshops Served 500+
content = content.replace(
    '<p>Client Supported</p>',
    '<p>Workshops Served</p>'
)
content = content.replace(
    '<span class="animate-number" data-value="350" data-animation-duration="1500">0</span><span class="counter-postfix">+</span>',
    '<span class="animate-number" data-value="500" data-animation-duration="1500">500</span><span class="counter-postfix">+</span>'
)

# Stat 2: OEM Match Accuracy 99%
content = content.replace(
    '<span class="animate-number" data-value="98" data-animation-duration="1500">0</span><span class="counter-postfix">%</span>',
    '<span class="animate-number" data-value="99" data-animation-duration="1500">99</span><span class="counter-postfix">%</span>'
)
content = content.replace(
    'Glowing Client Results',
    'OEM Match Accuracy'
)

# Stat 3: 4.9 Average Customer Rating
content = content.replace(
    '<span class="animate-number" data-value="4.9" data-animation-duration="1500">0</span>',
    '<span class="animate-number" data-value="4.9" data-animation-duration="1500">4.9</span>'
)

# Stat 4: 800+ Commercial Projects Completed
content = content.replace(
    '<span class="animate-number" data-value="800" data-animation-duration="1500">0</span><span class="counter-postfix">+</span>',
    '<span class="animate-number" data-value="800" data-animation-duration="1500">800</span><span class="counter-postfix">+</span>'
)
content = content.replace(
    'Skin Successful Surgeries',
    'Commercial Projects Completed'
)

with open('d:/manu/projects/royalautopaintsre/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Sync with royal_paints_1
try:
    with open('d:/manu/projects/royal_paints_1/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
except Exception as e:
    print('Sync error:', e)

print('Updated stats section in index.html successfully!')
