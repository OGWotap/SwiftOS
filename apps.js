const apps = {
  settings: {
    title: "Settings",
    render: () => `
      <p>Wi-Fi</p>
      <p>Bluetooth</p>
      <p>General</p>
    `
  },
  notes: {
    title: "Notes",
    render: () => `
      <textarea style="width:100%;height:80vh;"></textarea>
    `
  }
};
