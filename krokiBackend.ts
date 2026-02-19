import { system } from "@silverbulletmd/silverbullet/syscalls";
import { CodeWidgetContent } from "@silverbulletmd/silverbullet/type/client";

export async function krokiWidget(bodyText: string, diagramType: string): Promise<CodeWidgetContent> {
    const config = await system.getConfig("kroki", { server: "https://kroki.io" });
    const baseUrl = config?.server || "https://kroki.io";

    const url = `${baseUrl}/${diagramType}/svg`;
    console.log(`krokiWidget: Sending request to ${url} with body:`, bodyText);

    const svg = await httpPost(url, bodyText);

    return {
        html: `<pre id="${diagramType}">${svg}</pre>`,
        script: `
    document.addEventListener("click", () => {
      api({type: "blur"});
    });
    `,
    };
}

async function httpPost(url: string, bodyText: string): Promise<string> {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: bodyText,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
}