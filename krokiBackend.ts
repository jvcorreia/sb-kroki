import { CodeWidgetContent } from "@silverbulletmd/silverbullet/type/client";
import { getKrokiConfig } from "./krokiConfig.ts";

export async function krokiWidget(bodyText: string, diagramType: string): Promise<CodeWidgetContent> {
    const config = await getKrokiConfig();
    const baseUrl = config.server;

    const url = `${baseUrl}/${diagramType}/svg`;
    console.log(`krokiWidget: Sending request to ${url} with body:`, bodyText);

    const response = await httpPost(url, bodyText);

    return {
        html: `<pre id="${diagramType}">${response}</pre>`,
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
        return `Error: HTTP ${response.status}`;
    }

    return await response.text();
}