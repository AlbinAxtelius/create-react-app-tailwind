import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-64 h-32 p-2 bg-white rounded shadow">
        <h1 className="text-2xl text-gray-800">Hello world</h1>
        <p>
          Configure tailwind by editing the{" "}
          <code className="p-1 bg-gray-300 rounded select-all">
            tailwind.config.js
          </code>{" "}
          file.
        </p>
      </div>
    </div>
  );
};

export default App;
