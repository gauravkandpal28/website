# Gaurav Kandpal - Portfolio

A complete, buildless website. No ChatGPT account, paid service, database,
Node.js installation, or API key is needed to run or edit these files.

## Publish on GitHub Pages

1. Extract this ZIP on your computer.
2. Create a GitHub repository. Use a public repository for GitHub Free.
   For a personal homepage, name it `YOUR-USERNAME.github.io`.
   Alternatively, use a project name such as `portfolio`.
3. Upload the extracted files and the `assets` folder to the repository's
   top level. `index.html` must be at the top level, not inside an extra folder.
   Upload the contents, not the ZIP itself. Keep the `assets` folder structure.
4. Commit the files to the `main` branch.
5. Open the repository's **Settings > Pages**.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
7. Select branch **main**, folder **/(root)**, and click **Save**.
8. After deployment completes, open the website address shown by GitHub Pages.

For a repository named `YOUR-USERNAME.github.io`, the address is
`https://YOUR-USERNAME.github.io/`. For a repository named `portfolio`, it is
`https://YOUR-USERNAME.github.io/portfolio/`. These are examples; replace the
username and repository name with your own. No custom domain is required.

GitHub Pages publishes the site publicly. Review the email addresses, postal
address, photographs, and certificates before publishing. The files contain
the public profile information supplied for the portfolio; remove anything
you do not want on the open internet.

Official publishing instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Make changes without ChatGPT

You can edit directly in GitHub: open a file, choose the pencil icon, make
the change, and commit it. GitHub Pages republishes changes committed to
the publishing branch. Or edit the files in VS Code or any plain-text editor.

| File | What to edit |
| --- | --- |
| `index.html` | Biography, links, news, publications, education, teaching, conferences, captions, and contact details |
| `style.css` | Fonts, colors, spacing, layout, and responsive breakpoints |
| `app.js` | Six-scene animation text, illustrations, and interactions |
| `cv.html` | Printable curriculum vitae; update separately when the profile changes |
| `assets/portrait.webp` | Main profile photograph |
| `assets/gallery-01.webp` through `gallery-08.webp` | Academic photos and certificates |
| `assets/quote.webp` | Original quote image |

Search for an existing news item or publication in `index.html` and duplicate
its complete `<li>...</li>` block to add another. Give each publication a unique
`id`, give its BibTeX block a unique `id`, and use that same ID in its button's
`data-bib` and `aria-controls` attributes. Update article and presentation counts
in the introduction and in the final animation scene in `app.js` as needed.

To replace your portrait with a JPEG or PNG, place it in `assets`, change both
portrait URLs in `index.html`, and retain the circular styling in `style.css`.
To use a PDF CV instead, add your PDF to `assets` and change the two CV links
in `index.html` from `cv.html` to `assets/YOUR-CV.pdf`. The included `cv.html`
also has a Print / Save PDF control.

Theme colors are grouped in `:root` near the top of `style.css`. The main
font is Source Sans 3, stored locally. Navigation anchors and assets use
relative paths, so both personal and project GitHub Pages URLs work.

## Preview locally

Open `index.html` in a browser. The site uses no fetch requests or modules,
so its essential interactions also work from a local file. For an optional
local web server, run `python3 -m http.server 8000` in the extracted folder,
then open `http://localhost:8000`.

## Design and content notes

The source information and photographs came from Gaurav's Google Site:
https://sites.google.com/view/gauravstat/bio and its linked Work & Education,
Publications, Research, Conferences & Workshops, and Important Templates pages.
The WSTA certificate records shortlisting for the Best Paper Presentation Award
competition, not winning the award; the text preserves that distinction.
Research graphics are conceptual illustrations, not reported data or numerical
results. The template links point to the original shared Google Drive files.

Source Sans 3 is distributed under the SIL Open Font License; see
`assets/SourceSans3-LICENSE.md`. Noto Sans Devanagari is also under the SIL
Open Font License; see `assets/NotoDevanagari-LICENSE.txt`.

This export excludes ChatGPT hosting configuration, Git history, credentials,
and temporary test pages. It can be hosted independently as plain static files.
