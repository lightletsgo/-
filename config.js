// ⚠️ 여기에 본인의 Supabase 정보를 입력하세요
// Supabase 대시보드 > Project Settings > Data API 에서 확인 가능

const SUPABASE_URL = "https://ggnafhqlbyuqtrtjacqe.supabase.co"; // 예: https://ggnafhqlbyuqtrtjacqe.supabase.co
const SUPABASE_ANON_KEY = "sb_publishable_LoaDEGg8xW39XQhwJM45rQ_m7h8Bv14"; // sb_publishable_... 로 시작하는 키

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
