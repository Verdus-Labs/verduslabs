export const dynamic = "force-static";

const script = `#!/usr/bin/env bash
set -euo pipefail

sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg \\
  https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=arm64] \\\\
https://brave-browser-apt-release.s3.brave.com/ stable main" | \\
  sudo tee /etc/apt/sources.list.d/brave-browser-release.list
`;

export function GET() {
  return new Response(script, {
    headers: {
      "content-type": "text/x-shellscript; charset=utf-8",
      "content-disposition": 'attachment; filename="brave-browser-install.sh"',
      "cache-control": "public, max-age=3600",
    },
  });
}

