create table if not exists profiles (
  id uuid primary key,
  username text unique not null,
  birth_date date,
  is_minor boolean default false,
  parental_consent boolean default false,
  created_at timestamptz default now()
);

create table if not exists servers (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null,
  name text not null,
  created_at timestamptz default now()
);

create table if not exists channels (
  id uuid primary key default gen_random_uuid(),
  server_id uuid references servers(id) on delete cascade,
  name text not null,
  type text not null,
  created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  channel_id uuid references channels(id) on delete cascade,
  author_id uuid not null,
  content text not null,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table servers enable row level security;
alter table channels enable row level security;
alter table messages enable row level security;

create policy "profiles_select" on profiles for select using (true);
create policy "messages_select" on messages for select using (true);
create policy "messages_insert" on messages for insert with check (auth.uid() = author_id);
