-- RFQ email notification outbox.
-- An SQLite trigger atomically queues one notification only when a NEW RFQ row is inserted.
-- INSERT ... ON CONFLICT DO NOTHING on rfq therefore cannot enqueue duplicate notifications.
CREATE TABLE IF NOT EXISTS rfq_notifications (
  rfq_id TEXT PRIMARY KEY NOT NULL REFERENCES rfq(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'sent', 'failed')),
  attempts INTEGER NOT NULL DEFAULT 0,
  next_attempt_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  lease_until TEXT,
  last_error_code TEXT,
  provider_message_id TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  sent_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_rfq_notifications_queue ON rfq_notifications(status, next_attempt_at);
CREATE TRIGGER IF NOT EXISTS rfq_enqueue_email
AFTER INSERT ON rfq
BEGIN
  INSERT INTO rfq_notifications (rfq_id) VALUES (NEW.id);
END;
