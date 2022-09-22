import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>App</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
