.menu-fixo {
  position: sticky;
  top: 0;
  z-index: 999;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  padding: 15px;
  margin-bottom: 30px;

  background: rgba(10,10,10,0.9);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.menu-fixo button {
  background: #111827;
  color: #f3f4f6;

  border: 1px solid #1f2937;
  border-radius: 8px;

  padding: 8px 14px;

  cursor: pointer;
  font-weight: 600;

  transition: 0.2s;
}

.menu-fixo button:hover {
  background: #2563eb;
}
