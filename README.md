# TIMEFLOW Clock

A live dot-matrix clock for Nigeria, built with plain HTML, CSS and JavaScript.

## Time accuracy

- Uses the device's current system clock (`Date`).
- Formats that instant explicitly in the `Africa/Lagos` timezone.
- Displays a 24-hour clock with seconds.
- Refreshes at each second boundary and refreshes when the page becomes visible again.

The clock does not use a server-side time feed. Its accuracy therefore depends on the device clock being correctly synchronized. If the phone or computer clock is wrong, the displayed time will also be wrong.

## Deploy

The workflow in `.github/workflows/deploy-timeflow-clock.yml` deploys the contents of this folder to GitHub Pages.

In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Then run the `Deploy TIMEFLOW Clock` workflow from the Actions tab, or push a change under `clock/`.

For a profile repository named `ojodavidoluwadarasimi`, the expected Pages URL is:

`https://ojodavidoluwadarasimi.github.io/`

## Local preview

Open `clock/index.html` in a browser. No build tools or dependencies are required.
