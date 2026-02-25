import { krokiWidget } from "./krokiBackend.ts";
import { CodeWidgetContent } from "@silverbulletmd/silverbullet/type/client";

export async function krokiBlockdiagWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiBlockdiagWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'blockdiag');
}

export async function krokiBpmnWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiBpmnWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'bpmn');
}

export async function krokiBytefieldWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiBytefieldWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'bytefield');
}

export async function krokiSeqdiagWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiSeqdiagWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'seqdiag');
}

export async function krokiActdiagWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiActdiagWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'actdiag');
}

export async function krokiNwdiagWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiNwdiagWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'nwdiag');
}

export async function krokiPacketdiagWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiPacketdiagWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'packetdiag');
}

export async function krokiRackdiagWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiRackdiagWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'rackdiag');
}

export async function krokiC4plantumlWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiC4plantumlWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'c4plantuml');
}

export async function krokiD2Widget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiD2Widget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'd2');
}

export async function krokiDbmlWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiDbmlWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'dbml');
}

export async function krokiDitaaWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiDitaaWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'ditaa');
}

export async function krokiErdWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiErdWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'erd');
}

export async function krokiGraphvizWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiGraphvizWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'graphviz');
}

export async function krokiMermaidWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiMermaidWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'mermaid');
}

export async function krokiNomnomlWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiNomnomlWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'nomnoml');
}

export async function krokiPikchrWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiPikchrWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'pikchr');
}

export async function krokiPumlWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiPumlWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'plantuml');
}

export async function krokiStructurizrWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiStructurizrWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'structurizr');
}

export async function krokiSvgbobWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiSvgbobWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'svgbob');
}

export async function krokiSymbolatorWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiSymbolatorWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'symbolator');
}

export async function krokiTikzWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiTikzWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'tikz');
}

export async function krokiUmletWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiUmletWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'umlet');
}

export async function krokiVegaWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiVegaWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'vega');
}

export async function krokiVegaLiteWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiVegaLiteWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'vega-lite');
}

export async function krokiWavedromWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiWavedromWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'wavedrom');
}

export async function krokiWirevizWidget(
  bodyText: string,
  pageName: string
): Promise<CodeWidgetContent> {
  console.log('krokiWirevizWidget called with bodyText:', bodyText);
  return krokiWidget(bodyText, 'wireviz');
}

