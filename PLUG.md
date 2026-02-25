---
name: Library/jvcorreia/sb-kroki
tags: meta/library
files:
- sb-kroki.plug.js

---

A SilverBullet plug that integrates Kroki diagram rendering into your notes. Kroki provides a unified API for creating diagrams from textual descriptions using various diagram tools. This plug enables you to render 27 different diagram types directly within your SilverBullet workspace.

## Installation

To install this plug, add the following to your space's `PLUGS` file:

```yaml
- github:jvcorreia/sb-kroki/kroki.plug.js
```

Then run the `Plugs: Update` command to install it.

## Configuration

By default, diagrams are rendered using the public Kroki server at `https://kroki.io`. You can configure a custom Kroki server by adding the following to your space's `CONFIG` file:

```yaml
kroki:
  server: "https://your-kroki-server.com"
```

## Usage

To create a diagram, use a fenced code block with the diagram type as the language identifier. All supported diagram types are prefixed with `kroki_`.

### Supported Diagram Types

- `kroki_blockdiag` - Block diagrams
- `kroki_bpmn` - Business Process Model and Notation
- `kroki_bytefield` - Byte field diagrams
- `kroki_seqdiag` - Sequence diagrams
- `kroki_actdiag` - Activity diagrams
- `kroki_nwdiag` - Network diagrams
- `kroki_packetdiag` - Packet diagrams
- `kroki_rackdiag` - Rack diagrams
- `kroki_c4plantuml` - C4 model with PlantUML
- `kroki_d2` - D2 declarative diagrams
- `kroki_dbml` - Database Markup Language
- `kroki_ditaa` - ASCII art diagrams
- `kroki_erd` - Entity Relationship Diagrams
- `kroki_graphviz` - Graphviz (DOT)
- `kroki_mermaid` - Mermaid diagrams
- `kroki_nomnoml` - UML diagrams
- `kroki_pikchr` - Pikchr diagrams
- `kroki_puml` - PlantUML
- `kroki_structurizr` - Structurizr architecture diagrams
- `kroki_svgbob` - ASCII to SVG converter
- `kroki_symbolator` - Symbol diagrams
- `kroki_tikz` - TikZ diagrams
- `kroki_umlet` - UMLet diagrams
- `kroki_vega` - Vega visualizations
- `kroki_vega-lite` - Vega-Lite visualizations
- `kroki_wavedrom` - Digital timing diagrams
- `kroki_wireviz` - Cable/wiring diagrams

### Examples

**Mermaid flowchart:**

````markdown
```kroki_mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
```
````

**PlantUML sequence diagram:**

````markdown
```kroki_puml
@startuml
Alice -> Bob: Hello
Bob -> Alice: Hi!
@enduml
```
````

**Graphviz graph:**

````markdown
```kroki_graphviz
digraph G {
    A -> B -> C;
    A -> C;
}
```
````

The diagrams will be rendered as SVG images inline in your notes.
