// ⚠️ 여기에 본인의 Supabase 정보를 입력하세요
// Supabase 대시보드 > Project Settings > Data API 에서 확인 가능

const SUPABASE_URL = "여기에_Project_URL_붙여넣기"; // 예: https://ggnafhqlbyuqtrtjacqe.supabase.co
const SUPABASE_ANON_KEY = "여기에_출판가능키_붙여넣기"; // sb_publishable_... 로 시작하는 키

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
