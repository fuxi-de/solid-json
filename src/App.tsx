import { createSignal, type Component, useContext, onMount } from "solid-js";
import { JsonExplorer } from "./components/JsonExplorer";
import { JsonExplorerContext } from "./context";
import { JsonValue } from "./types";

const App: Component = () => {
  const [url, setUrl] = createSignal(
    " https://jsonplaceholder.typicode.com/users"
  );
  const [json, setJson] = createSignal<JsonValue>("");
  const { property } = useContext(JsonExplorerContext);
  onMount(() => {
    fetchJson(url());
  });

  const fetchJson = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("fetched json: ", json);
        return setJson(json as JsonValue);
      });
  };

  return (
    <div>
      <div class="container mx-auto">
        <div class="flex flex-row flex-wrap py-4">
          <aside class="w-1/3 px-2">
            <div class="sticky top-0 w-full">
              <form class="w-4/5 flex flex-col max-w-sm gap-4">
                <label>
                  <input
                    class="outline-2 outline-zinc-700 border rounded-lg p-3 xborder-zinc-700 placeholder-zinc-600 text-zinc-800 w-full"
                    type="text"
                    placeholder="API Url"
                    value={url()}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      fetchJson(e.target.value);
                    }}
                  ></input>
                  <span class="block mt-2 pl-2 text-sm font-medium text-slate-700">
                    input a URL you want to fetch Data from
                  </span>
                </label>
                <label>
                  <input
                    class="outline-2 outline-zinc-700 border rounded-lg p-3 xborder-zinc-700 placeholder-zinc-600 text-zinc-800"
                    type="text"
                    placeholder="Path"
                    value={property().path.join(".")}
                  ></input>
                  <span class="block mt-2 pl-2 text-sm font-medium text-slate-700">
                    selected Path from JSON
                  </span>
                </label>
                <label>
                  <input
                    class="outline-2 outline-zinc-700 border rounded-lg p-3 xborder-zinc-700 placeholder-zinc-600 text-zinc-800"
                    type="text"
                    placeholder="Value"
                    value={JSON.stringify(property().value)}
                  ></input>
                  <span class="block mt-2 pl-2 text-sm font-medium text-slate-700">
                    selected Value from JSON
                  </span>
                </label>
              </form>
            </div>
          </aside>
          <main role="main" class="w-2/3">
            <JsonExplorer rootNode={json()} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
