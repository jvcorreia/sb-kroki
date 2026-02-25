import { system } from "@silverbulletmd/silverbullet/syscalls";

export interface KrokiConfig {
    server: string;
}

export async function getKrokiConfig(): Promise<KrokiConfig> {
    const config = await system.getConfig("kroki", { server: "https://kroki.io" });
    return {
        server: config?.server || "https://kroki.io",
    };
}
