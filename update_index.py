import re

with open('c:/Users/kamma/.gemini/antigravity/scratch/restaurant-website/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace links
content = content.replace('<a href="#menu">Menu</a>', '<a href="menu.html">Menu</a>')
content = content.replace('<a href="#menu" class="btn-primary">Explore Menu</a>', '<a href="menu.html" class="btn-primary">Explore Menu</a>')

# Remove the menu section
content = re.sub(r'<!-- ─── MENU ─── -->\s*<section class="section menu" id="menu">.*?</section>\s*(?=<!-- ─── GALLERY ─── -->)', '', content, flags=re.DOTALL)

with open('c:/Users/kamma/.gemini/antigravity/scratch/restaurant-website/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
