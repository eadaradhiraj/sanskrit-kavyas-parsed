Here are the instructions and standards I am following to generate the HTML files, incorporating your initial requirements and the recent updates (removing transliteration and enforcing atomic word blocks):

### 1. File Structure & Naming
*   **One file per Shloka.**
*   **Naming Convention:**
    *   For *Raghuvamsham*: `canto_verse.html` (e.g., `3_16.html`).
    *   For *Subhashitas/Other*: `verse_number.html` (e.g., `48.html`).

### 2. HTML Template & Styling
*   **CSS:** Link to `../style.css`.
*   **Fonts:** Link Google Fonts:
    *   **Martel** (for English/General text).
    *   **Tiro Devanagari Sanskrit** (for Sanskrit text).
*   **Structure & Classes:**
    *   `.container`: Main wrapper.
    *   `.shloka-display`: For the main verse (Devanagari only).
    *   `.section-title`: Headings for Analysis and Translation.
    *   `.analysis-grid`: Container for the word breakdown.
    *   `.word-card`: Individual block for each word.
    *   `.grammar-box`: Inside a word card for notes.
    *   `.full-translation`: Container for the final English translation.

### 3. Navigation (Header)
*   **Title:** Main Text Name (e.g., "Raghuvamsham" or "Budhabhūṣaṇam" in Devanagari or English as requested).
*   **Subtitle:** Verse reference (e.g., "Canto 3, Shloka 16").
*   **Pagination:** `<nav class="pagination">` containing `Prev` and `Next` links pointing to the adjacent file numbers.

### 4. Content & Analysis Logic
*   **Text Correction:** Correct any typos or Sandhi errors in the display text.
*   **Padaccheda (Word Splitting):** Break Sandhi in the `.parsed-word` section.
*   **One Block Per Word:**
    *   Long compounds must be broken down into their individual components (semantic words) in separate cards.
*   **Samasa & Grammar:**
    *   Identify compounds and provide the Vigraha (dissolution) and Type (e.g., Bahuvrihi) in the `.grammar-box`.
    *   Identify verb forms (Lakara), participles, and suffixes.
*   **Translation:** A coherent English translation at the bottom.

### 5. Specific Formatting constraints (Updated)
*   **NO Transliteration:** Romanized Sanskrit (IAST) is excluded.
*   **Word Card Internal Structure:**
    ```html
    <div class="word-card">
      <span class="sanskrit-word">...</span> <!-- Original/Component -->
      <span class="parsed-word">...</span>   <!-- Split form -->
      <div class="meaning">...</div>         <!-- English Meaning -->
      <div class="grammar-box">              <!-- Optional -->
        <span class="grammar-label">...</span> <!-- e.g., Samasa/Grammar -->
        ...Content...
      </div>
    </div>
    ```

I am ready for the next set of verses. Please provide the text or image.