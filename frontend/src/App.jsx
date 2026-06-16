import "./app/App.css";
import { Editor } from "@monaco-editor/react"

function App() {
  return (
    <>
      <main className="bg-gray-950 h-screen w-full flex gap-4 p-2">

        <aside
        className="h-full w-1/4 bg-amber-50 rounded-lg"
        >
        </aside>

        <section
        className="w-3/4 bg-neutral-800 rounded-lg"
        >
          <Editor 
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// soem comment"
          theme="vs-dark"
          />
        </section>
      </main>
    </>
  );
}

export default App;
