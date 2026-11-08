-- Greenie inbound wholesale quote requests.
-- Store only buyer-provided fields, not IP addresses, cookies or captcha tokens.
CREATE TABLE IF NOT EXISTS rfq (
  id TEXT PRIMARY KEY NOT NULL,
  company TEXT NOT NULL,
  contact TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  product TEXT NOT NULL,
  grade TEXT NOT NULL DEFAULT '',
  quantity TEXT NOT NULL DEFAULT '',
  port TEXT NOT NULL DEFAULT '',
  incoterm TEXT NOT NULL DEFAULT '',
  services TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'quoted', 'closed')),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_rfq_created_at ON rfq(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rfq_status ON rfq(status, created_at DESC);
