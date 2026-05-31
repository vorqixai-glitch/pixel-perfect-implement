import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Dispatch — Command Intelligence Platform" },
      {
        name: "description",
        content:
          "Nexus Dispatch: real-time fleet command, route intelligence, and dispatch analytics in a single mission-control workspace.",
      },
      { property: "og:title", content: "Nexus Dispatch — Command Intelligence Platform" },
      {
        property: "og:description",
        content:
          "Real-time fleet command, route intelligence, and dispatch analytics in a single mission-control workspace.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/dispatch.html"
      title="Nexus Dispatch"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        background: "#04060a",
      }}
    />
  );
}
