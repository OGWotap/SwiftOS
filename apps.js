const apps = {
  settings: {
    title: "Settings",
    render: () => `
      <label>
        <input type="checkbox" id="darkToggle">
        Dark Mode
      </label>
    `,
    onOpen: () => {
      const toggle = document.getElementById("darkToggle");
      toggle.checked = localStorage.getItem("dark") === "true";

      toggle.onchange = () => {
        localStorage.setItem("dark", toggle.checked);
        document.body.style.background = toggle.checked ? "black" : "#eee";
        document.body.style.color = toggle.checked ? "white" : "black";
      };
    }
  },

  notes: {
    title: "Notes",
    render: () => `
      <textarea id="notesBox" placeholder="Type something..."></textarea>
    `,
    onOpen: () => {
      const box = document.getElementById("notesBox");
      box.value = localStorage.getItem("notes") || "";
      box.oninput = () => localStorage.setItem("notes", box.value);
    }
  }
};

