Here are the rules and standards to be followed to generate HTML files:

### 1. File Structure & Naming
*   **One file per Shloka:** Each verse gets its own standalone HTML file.
*   **Naming Convention:**
    *   For **Raghuvamsham** (or texts with cantos/chapters): `canto_verse.html` (e.g., `3_1.html`, `2_45.html`).
    *   For **Subhashitas/Other texts**: `verse_number.html` (e.g., `514.html`, `46.html`).

### 2. HTML Template & Styling
*   **External CSS:** All files must link to `../style.css`.
*   **Fonts:** Must include the Google Fonts link for **Martel** (general text) and **Tiro Devanagari Sanskrit** (Sanskrit text).
*   **Specific CSS Classes:** I must strictly use the following class names to maintain layout consistency:
    *   `.container`
    *   `.shloka-display` (for the main verse text)
    *   `.section-title`
    *   `.analysis-grid` (the flex/grid container for cards)
    *   `.word-card` (individual card for each word)
    *   `.sanskrit-word`, `.parsed-word`, `.meaning`
    *   `.grammar-box`, `.grammar-label`

### 3. Navigation
*   **Header:** Must contain the Title (Book Name) and Subtitle (Canto/Verse Number).
*   **Pagination:** A `<nav class="pagination">` block with **Prev** and **Next** links pointing to the specific preceding and succeeding filenames.

### 4. Content & Analysis Requirements
*   **Text Correction:** I must fix any typos, OCR errors, or Sandhi mistakes present in the source text (e.g., changing `तथेइति` to `तथेति`) for the display.
*   **Padaccheda (Word Splitting):**
    *   In the `.parsed-word` span, I must resolve Sandhi (e.g., `वागर्थाविव` $\to$ `वाक्-अर्थौ-इव`).
*   **Samasa (Compound) Analysis:**
    *   **Full Words:** I must **not** use ellipses (`...`) for long compound words in the word card; the full word must be displayed.
    *   **Vigraha Vakya:** Inside the `.grammar-box`, I must provide the step-by-step dissolution/breakdown of the compound.
    *   **Classification:** I must correctly identify the type of compound (e.g., *Bahuvrihi*, *Shasthi-Tatpurusha*, *Karmadharaya*).
*   **Grammar Tags:**
    *   Identify verb forms (e.g., Perfect/Lit, Imperfect/Lang).
    *   Identify participles and suffixes (e.g., *Shatr*, *Shanach*, *Lyap*, *Tumun*).
*   **Translation:** A coherent, full English translation is provided at the bottom.

### 5. Workflow
*   You provide the Sanskrit text (or image).
*   I process them (usually in batches or one by one) and generate the complete HTML code ready for saving.