import os

# Configuration
EXCLUDE_DIRS = {'.git', '.github', '__pycache__'}
EXCLUDE_FILES = {'index.html', 'style.css', 'AI_instructions.MD', 'generate_index.py'}
OUTPUT_FILE = 'index.html'

def generate_html():
    html_content = [
        "<!DOCTYPE html>",
        "<html lang='en'>",
        "<head>",
        "    <meta charset='UTF-8'>",
        "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "    <title>Sanskrit Library Home</title>",
        "    <link rel='stylesheet' href='style.css'>",
        "    <style>",
        "        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f7f6; color: #2c3e50; }",
        "        .container { max-width: 900px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }",
        "        h1 { border-bottom: 2px solid #3498db; padding-bottom: 10px; color: #2980b9; }",
        "        details { margin-bottom: 8px; border: 1px solid #e1e4e8; border-radius: 6px; overflow: hidden; }",
        "        summary { padding: 12px; background: #f8f9fa; cursor: pointer; font-weight: 600; list-style: none; display: flex; align-items: center; transition: background 0.2s; }",
        "        summary:hover { background: #edf2f7; }",
        "        summary::before { content: '▶'; margin-right: 12px; font-size: 0.8em; color: #7f8c8d; transition: transform 0.2s; }",
        "        details[open] summary::before { transform: rotate(90deg); }",
        "        ul { list-style: none; padding: 10px 0 10px 40px; margin: 0; background: #fff; }",
        "        li { margin: 6px 0; }",
        "        a { text-decoration: none; color: #34495e; font-size: 0.95em; }",
        "        a:hover { color: #3498db; text-decoration: underline; }",
        "        .count { margin-left: auto; font-size: 0.8em; color: #95a5a6; font-weight: normal; }",
        "    </style>",
        "</head>",
        "<body>",
        "<div class='container'>",
        "    <h1>📚 Sanskrit Literary Archive</h1>",
        "    <p>Explore the collection below. Click a category to expand.</p>"
    ]

    # Get sorted list of directories
    items = sorted(os.listdir('.'))
    
    for item in items:
        if os.path.isdir(item) and item not in EXCLUDE_DIRS:
            files = sorted([f for f in os.listdir(item) if f.endswith('.html')])
            if not files:
                continue
            
            html_content.append(f"    <details>")
            html_content.append(f"        <summary>{item} <span class='count'>{len(files)} files</span></summary>")
            html_content.append(f"        <ul>")
            
            for file in files:
                file_path = f"{item}/{file}"
                html_content.append(f"            <li><a href='{file_path}'>📄 {file}</a></li>")
            
            html_content.append(f"        </ul>")
            html_content.append(f"    </details>")

    html_content.append("</div>")
    html_content.append("</body>")
    html_content.append("</html>")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("\n".join(html_content))
    
    print(f"✅ Successfully generated {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_html()