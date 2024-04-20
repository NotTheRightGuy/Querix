import AuroraBackgroundDemo from "@/components/pages/aurora-demo";
import CodeBlock from "@/components/ui/CodeBlock";

export default function background() {
  return (
    <>
      <div>
        <AuroraBackgroundDemo />
        <div className="h-screen">
        <CodeBlock/>
        </div>
      </div>
    </>
  );
}
