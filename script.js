(() => {
  "use strict";

  const LOCAL_CONFIG = Object.freeze({
    storageKey: "cherry-case-v1",
    adminSecret: "zKjh74ceAKwTXOizpRXAmaaJeSC-haksdODjwnP0J_w",
    apiBaseUrl: window.location.protocol === "file:" ? "http://localhost:8787" : "",
    backendConnected: true,
    paymentsConnected: false,
    membershipConnected: false,
    botUsername: "CherryGift_bot",
    miniAppUrl: "https://t.me/CherryGift_bot/httpsgamepatchv2previewem",
    projectChannel: "https://t.me/cherrygiftnews",
    projectChat: "https://t.me/cherrygiftnews"
  });

  const GIFT_LIST = [
    ["teddy", "Teddy Bear", 15, "https://i.postimg.cc/ZK7pZHvb/rkeker.jpg"],
    ["heart", "Heart", 15, "https://i.postimg.cc/MKPVx5fT/vcu.jpg"],
    ["rose", "Red Rose", 25, "https://i.postimg.cc/sD67ymGf/vucv.jpg"],
    ["rocket", "Rocket", 50, "https://i.postimg.cc/5N7L1gQN/uauk.jpg"],
    ["champagne", "Champagne", 50, "https://i.postimg.cc/BQYHspPt/kr.jpg"],
    ["diamond", "Diamond", 100, "https://i.postimg.cc/Pr3Yhyv5/oenlg.jpg"],
    ["cup", "Cup", 100, "https://i.postimg.cc/8PKMD4fc/oen.jpg"],
    ["ring", "Engagement Ring", 100, "https://i.postimg.cc/kX1K9sRB/rke.jpg"],
    ["pool", "Pool Float", 370, "https://i.postimg.cc/QMRqDbPS/ukppku.jpg"],
    ["cupcake", "Whip Cupcake", 379, "https://i.postimg.cc/kggsvDKh/ruuk.jpg"],
    ["mousse", "Mousse Cake", 575, "https://i.postimg.cc/nckTmqjx/ukpku.jpg"],
    ["cookie", "Cookie Heart", 500, "https://i.postimg.cc/65wYTMQR/upkpkupk.jpg"],
    ["basket", "Spring Basket", 645, "https://i.postimg.cc/x8VgvR3V/pu.jpg"],
    ["jar", "Restless Jar", 619, "https://i.postimg.cc/5tGs01Hs/popao.jpg"],
    ["homemade", "Homemade Cake", 648, "https://i.postimg.cc/bYSK1VpP/fypv.jpg"],
    ["toy", "Toy Bear", 4841, "https://i.postimg.cc/mDvpdRB1/fukpukpukp.jpg"],
    ["money", "Money Pot", 453, "https://i.postimg.cc/SQ9vnXfp/pukpukpku.jpg"],
    ["clover", "Clover Pin", 555, "https://i.postimg.cc/YS4xTVXB/ukrurku.jpg"],
    ["frog", "Kissed Frog", 4841, "https://i.postimg.cc/Kz6p9FF6/pagna.jpg"],
    ["socks", "Fresh Socks", 526, "https://i.postimg.cc/9MRNtz3B/ure.jpg"],
    ["sword", "Light Sword", 780, "https://i.postimg.cc/FKnBL36K/ukp.jpg"],
    ["cream", "Vice Cream", 350, "https://i.postimg.cc/prvYhdPd/pukpkupk.jpg"]
  ];
  const GIFTS = Object.freeze(Object.fromEntries(GIFT_LIST.map(([id, name, value, image]) => [id, Object.freeze({ id, name, value, image, type: "gift" })])));

  const STAR_IMAGES = Object.freeze({
    low: "https://i.postimg.cc/QtJQpJFL/IMG-20260611-171554-195.jpg",
    mid: "https://i.postimg.cc/cLPBZHqC/IMG-20260611-171551-274.jpg",
    high: "https://i.postimg.cc/441Ptscc/IMG-20260611-171548-929.jpg"
  });
  const starReward = (id, name, value, image) => ({ id, name, value, image, type: "stars" });
  const fixedStars = {
    star2: starReward("star2", "2 Stars", 2, STAR_IMAGES.low),
    star3: starReward("star3", "3 Stars", 3, STAR_IMAGES.low),
    star4: starReward("star4", "4 Stars", 4, STAR_IMAGES.low),
    star5: starReward("star5", "5 Stars", 5, STAR_IMAGES.low),
    star10: starReward("star10", "10 Stars", 10, STAR_IMAGES.low),
    star150: starReward("star150", "150 Stars", 150, STAR_IMAGES.high)
  };
  const dailyStarRanges = {
    low: { id: "daily-stars-2-10", type: "stars-range", min: 2, max: 10, name: "2-10 Stars", image: STAR_IMAGES.low },
    mid: { id: "daily-stars-10-50", type: "stars-range", min: 10, max: 50, name: "10-50 Stars", image: STAR_IMAGES.mid },
    high: { id: "daily-stars-50-100", type: "stars-range", min: 50, max: 100, name: "50-100 Stars", image: STAR_IMAGES.high }
  };

  const CASES = Object.freeze({
    daily: {
      id: "daily", name: "Daily Case", price: 1,
      image: "https://i.postimg.cc/L63yNyR4/file-00000000b2bc7246b4ee3ddc44dc4a0f.png",
      rewards: [
        [dailyStarRanges.low, 90],
        [dailyStarRanges.mid, 4],
        [dailyStarRanges.high, .1],
        [GIFTS.teddy, 2],
        [GIFTS.rose, 1],
        [GIFTS.heart, 1],
        [GIFTS.rocket, 1.9]
      ],
      displayRewards: [dailyStarRanges.low, dailyStarRanges.mid, dailyStarRanges.high, GIFTS.teddy, GIFTS.rose, GIFTS.heart, GIFTS.rocket]
    },
    basic: {
      id: "basic", name: "Basic Case", price: 39,
      image: "https://i.postimg.cc/N0MPyRWd/file-000000003d5c72469cb6cf61e7b6ff01.png",
      rewards: [[GIFTS.teddy, 92], [GIFTS.rose, 4], [GIFTS.rocket, 1.5], [GIFTS.champagne, 1], [GIFTS.cup, .8], [GIFTS.ring, .5], [GIFTS.diamond, .1], [fixedStars.star150, .1]]
    },
    lucky: {
      id: "lucky", name: "Lucky Case", price: 149,
      image: "https://i.postimg.cc/VsMZbfVc/file-000000003e1872468fda63801dc50fbc.png",
      rewards: [[GIFTS.diamond, 33.3], [GIFTS.cup, 33.3], [GIFTS.ring, 33], [GIFTS.money, .3], [GIFTS.clover, .0999], [GIFTS.frog, .0001]]
    },
    diamond: {
      id: "diamond", name: "Diamond Case", price: 249,
      image: "https://i.postimg.cc/44hqbbmy/file-000000006b447246a40f79c382ec0e4b.png",
      rewards: [[GIFTS.ring, 39.7], [GIFTS.diamond, 39.7], [GIFTS.cup, 19.5], [GIFTS.cream, .8], [GIFTS.socks, .25], [GIFTS.sword, .05]]
    },
    cherry: {
      id: "cherry", name: "Cherry Case", price: 449,
      image: "https://i.postimg.cc/ZRQHvgrW/file-00000000725c724695fe99ac1d02e253.png",
      rewards: [[GIFTS.pool, 48], [GIFTS.cupcake, 48], [GIFTS.mousse, 2], [GIFTS.cookie, 1], [GIFTS.basket, .7], [GIFTS.jar, .2], [GIFTS.homemade, .0999], [GIFTS.toy, .0001]]
    }
  });
  Object.values(CASES).forEach(caseData => { if (!caseData.displayRewards) caseData.displayRewards = caseData.rewards.map(([reward]) => reward); });

  const I18N = {
    ru: {
      cases: "Кейсы", games: "Игры", inventory: "Инвентарь", profile: "Профиль",
      demoMode: "Demo Mode", realMode: "Real Mode", demo: "Демо", real: "Реальный",
      casesHero: "Открывай. Выигрывай. Сияй.", casesSub: "Telegram-подарки и Stars в премиальных Cherry Case.",
      liveDrops: "Live Drops", liveNeverStops: "обновляется постоянно", open: "Открыть", possibleRewards: "Возможные подарки",
      price: "Цена", nextOpening: "Следующее открытие через", gamesHero: "Испытай удачу", gamesSub: "Одна честная механика сейчас. Остальные уже готовятся.",
      playable: "Играть", comingSoon: "Скоро появится", comingSoonText: "Мы улучшаем баланс игры и добавим её в следующем обновлении.",
      emptyInventory: "Инвентарь пока пуст", emptyInventoryText: "Выигранные Telegram-подарки появятся здесь. Их можно продать за Stars или отправить на вывод.",
      sell: "Продать", withdraw: "Вывести", pending: "Ожидает", soldFor: "Подарок продан за", withdrawalCreated: "Заявка на вывод создана. Подарок придёт в течение 24 часов после проверки.", demoWithdrawRealOnly: "Подарки можно выводить только в Real Mode",
      profileTitle: "Ваш профиль", telegramId: "Telegram ID", mode: "Режим", balance: "Баланс", deposited: "Пополненные Stars", bonus: "Бонусные Stars",
      casesOpened: "Кейсов открыто", starsSpent: "Stars потрачено", starsWon: "Stars выиграно", inventoryValue: "Стоимость инвентаря", biggestWin: "Крупнейший выигрыш",
      language: "Язык", withdrawalHistory: "История выводов", soldHistory: "Проданные подарки", noHistory: "Истории пока нет",
      balanceTopUp: "Пополнение баланса", topUpStars: "Пополнить звёздами", adminTopUp: "Админ-пополнение",
      adminTopUpText: "Для ручного пополнения свяжитесь с @RadioArseny в Telegram. Вы можете отправить Telegram Stars напрямую, и после проверки они будут зачислены на ваш баланс в ближайшее время. Также можно отправить Telegram-подарок. Его стоимость будет оценена по актуальной рыночной цене, а эквивалентное количество Stars будет начислено на ваш баланс. Перед отправкой подарка рекомендуется заранее уточнить его примерную стоимость у @RadioArseny.",
      contact: "Связаться с @RadioArseny", close: "Закрыть", topUpTitle: "Пополнение Stars", customAmount: "Своя сумма", promoCode: "Промокод", apply: "Применить", pay: "Оплатить Stars",
      paymentsOffline: "Telegram Stars payments пока не подключены. Реальный баланс не будет изменён.", promoNotFound: "Промокод не найден", switchReal: "Переключитесь в Real Mode для пополнения.",
      adminAccess: "Admin Access", enterSecret: "Введите секрет администратора", openAdmin: "Открыть Admin Panel", invalidSecret: "Неверный секрет администратора",
      dailyAccess: "Получите доступ к Daily Case", dailyAccessText: "Чтобы открыть Daily Case, выполните задания:", subscribe: "Подписаться на канал Cherry Gift News", joinChat: "Вступить в чат Cherry Gift", shareThree: "Отправить приложение 3 друзьям",
      shareFriend: "Поделиться с другом", verify: "Проверить", verifyFailed: "Не удалось проверить подписку. Попробуйте позже.", demoVerified: "Задания подтверждены в Demo Mode.",
      insufficient: "Недостаточно Stars", won: "Вы выиграли", addedInventory: "Подарок добавлен в инвентарь", addedBalance: "Stars добавлены на баланс",
      bonusWarning: "Вы играете бонусными звёздами", bonusWarningText: "Эти звёзды получены из кейсов, подарков или бонусов, а не через пополнение. Вы можете играть ими, но вывод подарков проходит ручную проверку.", continue: "Продолжить", cancel: "Отмена",
      crashTitle: "Crash", crashSub: "Заберите выигрыш до падения множителя.", placeBet: "Сделать ставку", cashOut: "Забрать", waiting: "Приём ставок", startsIn: "Старт через", flying: "Раунд идёт", crashed: "КРАШ", betOnlyCountdown: "Ставки доступны только во время отсчёта.",
      betPlaced: "Ставка принята", alreadyBet: "Ставка уже сделана", cashedOut: "Вы забрали", roundFell: "Раунд упал на", lost: "Вы проиграли", livePlayers: "Игроки в раунде", history: "История",
      adminPanel: "Admin Panel", users: "Пользователи", withdrawals: "Выводы", caseHistory: "Кейсы", gameHistory: "Игры", payments: "Платежи", warnings: "Риски", addStars: "Начислить Stars", amount: "Сумма", asDeposit: "Как депозит", added: "Начислено", reject: "Отклонить", approve: "Одобрить", markSent: "Отметить отправленным", noData: "Нет данных",
      suspiciousNoDeposit: "Вывод без реальных пополнений", suspiciousBonus: "Вывод после игры только бонусными Stars", localOnly: "Локальный прототип: данные видны только на этом устройстве.",
      realModeNotice: "Real Mode хранит реальные данные отдельно. Платежи и выводы требуют серверной проверки.", demoModeNotice: "Demo Mode использует отдельный баланс, инвентарь, статистику и таймеры.", modeSwitched: "Режим переключён",
      confirmSell: "Продать подарок с бонусом 5%?", confirmWithdraw: "Создать заявку на вывод этого подарка?", yes: "Да", no: "Нет"
    },
    en: {
      cases: "Cases", games: "Games", inventory: "Inventory", profile: "Profile",
      demoMode: "Demo Mode", realMode: "Real Mode", demo: "Demo", real: "Real",
      casesHero: "Open. Win. Shine.", casesSub: "Telegram Gifts and Stars inside premium Cherry Cases.",
      liveDrops: "Live Drops", liveNeverStops: "always updating", open: "Open", possibleRewards: "Possible gifts",
      price: "Price", nextOpening: "Next opening in", gamesHero: "Test your nerve", gamesSub: "One polished game today. More are on the way.",
      playable: "Play", comingSoon: "Coming Soon", comingSoonText: "We are improving the balance and will add this game in a future update.",
      emptyInventory: "Your inventory is empty", emptyInventoryText: "Telegram Gifts you win will appear here. Sell them for Stars or create a withdrawal request.",
      sell: "Sell", withdraw: "Withdraw", pending: "Pending", soldFor: "Gift sold for", withdrawalCreated: "Withdrawal request created. Your gift will arrive within 24 hours after review.", demoWithdrawRealOnly: "Gifts can be withdrawn only in Real Mode",
      profileTitle: "Your profile", telegramId: "Telegram ID", mode: "Mode", balance: "Balance", deposited: "Deposited Stars", bonus: "Bonus Stars",
      casesOpened: "Cases opened", starsSpent: "Stars spent", starsWon: "Stars won", inventoryValue: "Inventory value", biggestWin: "Biggest win",
      language: "Language", withdrawalHistory: "Withdrawal history", soldHistory: "Sold gifts", noHistory: "No history yet",
      balanceTopUp: "Balance Top-Up", topUpStars: "Top up with Stars", adminTopUp: "Admin Top-Up",
      adminTopUpText: "To top up manually, contact @RadioArseny on Telegram. You can send Telegram Stars directly, and after verification they will be credited to your balance as soon as possible. You can also send a Telegram Gift. Its value will be estimated using the current market price, and the equivalent amount of Stars will be credited to your balance. Before sending a gift, it is recommended to confirm its estimated value with @RadioArseny.",
      contact: "Contact @RadioArseny", close: "Close", topUpTitle: "Telegram Stars Top-Up", customAmount: "Custom amount", promoCode: "Promo code", apply: "Apply", pay: "Pay with Stars",
      paymentsOffline: "Telegram Stars payments are not connected yet. Your real balance will not change.", promoNotFound: "Promo code not found", switchReal: "Switch to Real Mode to top up.",
      adminAccess: "Admin Access", enterSecret: "Enter admin secret", openAdmin: "Open Admin Panel", invalidSecret: "Invalid admin secret",
      dailyAccess: "Get access to Daily Case", dailyAccessText: "Complete these tasks to open Daily Case:", subscribe: "Subscribe to Cherry Gift News", joinChat: "Join Cherry Gift chat", shareThree: "Share the app with 3 friends",
      shareFriend: "Share with a friend", verify: "Check", verifyFailed: "Could not verify your subscription. Please try again later.", demoVerified: "Tasks verified in Demo Mode.",
      insufficient: "Not enough Stars", won: "You won", addedInventory: "Gift added to inventory", addedBalance: "Stars added to your balance",
      bonusWarning: "You are playing with bonus Stars", bonusWarningText: "These Stars came from cases, gifts, or bonuses, not from a real top-up. You can play with them, but gift withdrawals are manually reviewed.", continue: "Continue", cancel: "Cancel",
      crashTitle: "Crash", crashSub: "Cash out before the multiplier falls.", placeBet: "Place bet", cashOut: "Cash out", waiting: "Betting open", startsIn: "Starts in", flying: "Round live", crashed: "CRASHED", betOnlyCountdown: "Bets are only accepted during the countdown.",
      betPlaced: "Bet placed", alreadyBet: "You already placed a bet", cashedOut: "You cashed out", roundFell: "Round crashed at", lost: "You lost", livePlayers: "Live players", history: "History",
      adminPanel: "Admin Panel", users: "Users", withdrawals: "Withdrawals", caseHistory: "Cases", gameHistory: "Games", payments: "Payments", warnings: "Warnings", addStars: "Add Stars", amount: "Amount", asDeposit: "As deposit", added: "Added", reject: "Reject", approve: "Approve", markSent: "Mark sent", noData: "No data",
      suspiciousNoDeposit: "Withdrawal requested without deposits", suspiciousBonus: "Bonus-only gameplay withdrawal", localOnly: "Local prototype: data exists only on this device.",
      realModeNotice: "Real Mode keeps real data separate. Payments and withdrawals need server verification.", demoModeNotice: "Demo Mode has its own balance, inventory, stats, and cooldowns.", modeSwitched: "Mode switched",
      confirmSell: "Sell this gift with a 5% bonus?", confirmWithdraw: "Create a withdrawal request for this gift?", yes: "Yes", no: "No"
    }
  };

  const svg = {
    cases: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8.5h16v11H4zM3 5h18v3.5H3zM12 5v14.5M8.5 5c-2.8 0-2.8-3.5-.5-3.5 2 0 4 3.5 4 3.5M15.5 5c2.8 0 2.8-3.5.5-3.5-2 0-4 3.5-4 3.5"/></svg>',
    games: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 8h8a6 6 0 0 1 5.7 7.8l-.7 2.1a2.5 2.5 0 0 1-4.2 1l-1.5-1.6H8.7l-1.5 1.6a2.5 2.5 0 0 1-4.2-1l-.7-2.1A6 6 0 0 1 8 8Z"/><path d="M8 11v4M6 13h4M16.5 12.5h.01M18.5 14.5h.01"/></svg>',
    inventory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16v14H4zM7 3h10l3 4H4l3-4ZM9 11h6"/></svg>',
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    crash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 18 5-5 4 3 8-10M15 6h5v5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16v14H4zM7 3h10l3 4H4l3-4ZM9 12h6"/></svg>'
  };

  const defaultMode = isDemo => ({
    depositedStarsBalance: 0,
    bonusStarsBalance: isDemo ? 1000000 : 0,
    inventory: [],
    stats: { casesOpened: 0, starsSpent: 0, starsWon: 0, biggestWin: 0 },
    daily: { unlocked: false, channelOpened: false, chatOpened: false, shares: 0, lastOpenedAt: 0 },
    withdrawals: [], soldHistory: [], caseHistory: [], gameHistory: [], paymentHistory: [], adminHistory: [], crashHistory: []
  });
  const getTelegramUser = () => {
    const raw = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (!raw) return getLocalUser();
    const fullName = [raw.first_name, raw.last_name].filter(Boolean).join(" ").trim();
    return { id: String(raw.id || "unknown"), username: raw.username ? `@${raw.username}` : (fullName || "Guest"), firstName: raw.first_name || fullName || "Guest", avatar: raw.photo_url || "" };
  };
  const getLocalUser = () => {
    const key = `${LOCAL_CONFIG.storageKey}-local-user`;
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      if (saved?.id && saved.id !== "local-guest") return saved;
      const id = `local-${globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}`;
      const user = { id, username: `Guest ${id.slice(-4)}`, firstName: "Guest", avatar: "" };
      localStorage.setItem(key, JSON.stringify(user));
      return user;
    } catch {
      const id = `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`;
      return { id, username: `Guest ${id.slice(-4)}`, firstName: "Guest", avatar: "" };
    }
  };
  const makeDefaultState = () => ({ version: 1, language: "ru", mode: "real", user: getTelegramUser(), real: defaultMode(false), demo: defaultMode(true), liveDrops: [] });
  const storage = {
    load() {
      try {
        const parsed = JSON.parse(localStorage.getItem(LOCAL_CONFIG.storageKey));
        if (!parsed || parsed.version !== 1) return makeDefaultState();
        const fresh = makeDefaultState();
        return {
          ...fresh, ...parsed, user: getTelegramUser(),
          real: { ...fresh.real, ...parsed.real, stats: { ...fresh.real.stats, ...(parsed.real?.stats || {}) }, daily: { ...fresh.real.daily, ...(parsed.real?.daily || {}) } },
          demo: { ...fresh.demo, ...parsed.demo, stats: { ...fresh.demo.stats, ...(parsed.demo?.stats || {}) }, daily: { ...fresh.demo.daily, ...(parsed.demo?.daily || {}) } }
        };
      } catch { return makeDefaultState(); }
    },
    save() { localStorage.setItem(LOCAL_CONFIG.storageKey, JSON.stringify(state)); }
  };

  let state = storage.load();
  let activeTab = "cases";
  let gamesView = "list";
  let activeAdminTab = "users";
  let currentModal = null;
  let dropTimer = null;
  let clockTimer = null;
  let crashEngine = null;
  let liveCrashPlayersCache = [];
  let liveCrashPlayersFetchedAt = 0;
  const t = key => I18N[state.language][key] || I18N.en[key] || key;
  const modeState = () => state[state.mode];
  const totalBalance = (data = modeState()) => Math.max(0, Number(data.depositedStarsBalance || 0) + Number(data.bonusStarsBalance || 0));
  const fmt = value => Math.round(Number(value || 0)).toLocaleString(state.language === "ru" ? "ru-RU" : "en-US");
  const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const uid = prefix => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const nowTime = timestamp => new Intl.DateTimeFormat(state.language === "ru" ? "ru-RU" : "en-US", { hour: "2-digit", minute: "2-digit" }).format(timestamp || Date.now());
  const dateTime = timestamp => new Intl.DateTimeFormat(state.language === "ru" ? "ru-RU" : "en-US", { dateStyle: "short", timeStyle: "short" }).format(timestamp || Date.now());
  const inventoryValue = data => (data.inventory || []).filter(item => item.status !== "sent").reduce((sum, item) => sum + Number(item.value || 0), 0);
  const haptic = type => { try { window.Telegram?.WebApp?.HapticFeedback?.impactOccurred(type || "light"); } catch {} };
  const userInitial = user => String(user?.firstName || user?.username || "G").replace(/^@/,"").slice(0,1).toUpperCase() || "G";
  const openLink = url => {
    const href = String(url || "");
    if (!href) return;
    try {
      const webApp = window.Telegram?.WebApp;
      if (webApp?.openTelegramLink && href.startsWith("https://t.me/")) { webApp.openTelegramLink(href); return; }
      if (webApp?.openLink) { webApp.openLink(href); return; }
    } catch {}
    try {
      const link = document.createElement("a");
      link.href = href; link.target = "_blank"; link.rel = "noopener noreferrer";
      document.body.appendChild(link); link.click(); link.remove();
    } catch { window.location.href = href; }
  };
  async function apiRequest(path, options = {}) {
    if (!LOCAL_CONFIG.backendConnected || !window.fetch) return null;
    try {
      const response = await fetch(`${LOCAL_CONFIG.apiBaseUrl}${path}`, {
        method: options.method || "GET",
        headers: { "Content-Type": "application/json", ...(options.headers || {}) },
        body: options.body ? JSON.stringify(options.body) : undefined
      });
      if (!response.ok) return null;
      return await response.json();
    } catch { return null; }
  }

  function initializeTelegram() {
    try {
      const tg = window.Telegram?.WebApp;
      const telegramUser = getTelegramUser();
      if (tg) {
        tg.ready(); tg.expand();
        tg.setHeaderColor?.("#17050c"); tg.setBackgroundColor?.("#12040a");
      }
      state.user = telegramUser; storage.save();
      void apiRequest("/api/users/sync", { method: "POST", body: { user: state.user, mode: state.mode } });
    } catch {}
  }

  function toast(message) {
    const root = document.getElementById("toast-root");
    const element = document.createElement("div");
    element.className = "toast"; element.textContent = message; root.appendChild(element);
    setTimeout(() => { element.style.opacity = "0"; element.style.transform = "translateY(7px)"; }, 2600);
    setTimeout(() => element.remove(), 2900);
  }

  function renderShell() {
    const root = document.getElementById("app");
    root.innerHTML = `${renderTopbar()}<main id="page-root">${renderPage()}</main>${renderNav()}`;
    bindShellEvents();
    if (activeTab === "games" && gamesView === "crash" && document.getElementById("crash-stage")) startCrashEngine();
    else stopCrashEngine();
  }

  function renderTopbar() {
    const user = state.user;
    return `<header class="topbar"><div class="topbar-row">
      <div class="brand"><div class="brand-mark"><span></span></div><div><div class="brand-name">Cherry Case</div><div class="brand-sub">${escapeHtml(user.username || "Guest")}</div></div></div>
      <button class="mode-badge ${state.mode}" data-action="toggle-mode">${state.mode === "demo" ? t("demoMode") : t("realMode")}</button>
      <div class="balance-pill"><span class="star">★</span><span class="balance-value">${fmt(totalBalance())}</span><button class="plus" data-action="topup" aria-label="${t("balanceTopUp")}">+</button></div>
    </div></header>`;
  }

  function renderNav() {
    return `<nav class="bottom-nav" aria-label="Main navigation">${[
      ["cases", t("cases"), svg.cases], ["games", t("games"), svg.games], ["inventory", t("inventory"), svg.inventory], ["profile", t("profile"), svg.profile]
    ].map(([id,label,icon]) => `<button class="nav-btn ${activeTab === id ? "active" : ""}" data-tab="${id}">${icon}<span>${label}</span></button>`).join("")}</nav>`;
  }

  function renderPage() {
    if (activeTab === "games") return renderGames();
    if (activeTab === "inventory") return renderInventory();
    if (activeTab === "profile") return renderProfile();
    return renderCases();
  }

  function renderCases() {
    return `<section class="page"><div class="hero"><div class="eyebrow">Cherry Case</div><h1>${t("casesHero")}</h1><p>${t("casesSub")}</p></div>
      <section class="section"><div class="section-head"><h2>${t("liveDrops")}</h2><div class="section-meta">${t("liveNeverStops")}</div></div><div id="live-strip" class="live-strip">${renderLiveDrops()}</div></section>
      <section class="section"><div class="section-head"><h2>${t("cases")}</h2><div class="section-meta">5</div></div><div class="cases-grid">${Object.values(CASES).map(renderCaseCard).join("")}</div></section>
    </section>`;
  }

  function renderLiveDrops() {
    if (!state.liveDrops.length) seedDrops();
    return state.liveDrops.slice(0, 12).map(drop => `<article class="drop-card glass"><div class="drop-img"><img src="${drop.image}" alt="${escapeHtml(drop.name)}"></div><div class="drop-name">${escapeHtml(drop.name)}</div><div class="drop-meta"><span class="drop-value">★${fmt(drop.value)}</span><span>${nowTime(drop.time)}</span></div></article>`).join("");
  }

  function renderCaseCard(caseData) {
    const dailyRemaining = caseData.id === "daily" ? getDailyRemaining() : 0;
    return `<article class="case-card glass" data-action="case" data-case="${caseData.id}">
      ${caseData.id === "daily" ? `<div class="daily-tag">${dailyRemaining > 0 ? `<span class="cooldown" data-cooldown>${formatDuration(dailyRemaining)}</span>` : "24H DAILY"}</div>` : ""}
      <div class="case-glow"></div><div class="case-image-wrap"><img class="case-image" src="${caseData.image}" alt="${caseData.name}"></div>
      <div class="case-info"><div class="case-title">${caseData.name}</div><div class="case-bottom"><span class="price"><span class="star">★</span>${fmt(caseData.price)}</span><span class="mini-open">${t("open")}</span></div></div>
    </article>`;
  }

  function seedDrops() {
    const candidates = GIFT_LIST.map(([id]) => GIFTS[id]);
    state.liveDrops = Array.from({ length: 8 }, (_, index) => {
      const gift = candidates[Math.floor(Math.random() * candidates.length)];
      return { ...gift, time: Date.now() - index * 27000 };
    });
    storage.save();
  }

  function scheduleDrops() {
    clearTimeout(dropTimer);
    dropTimer = setTimeout(() => {
      const gift = GIFTS[GIFT_LIST[Math.floor(Math.random() * GIFT_LIST.length)][0]];
      state.liveDrops.unshift({ ...gift, time: Date.now() });
      state.liveDrops = state.liveDrops.slice(0, 30); storage.save();
      const strip = document.getElementById("live-strip");
      if (strip) strip.innerHTML = renderLiveDrops();
      scheduleDrops();
    }, 3000 + Math.random() * 4000);
  }

  function bindShellEvents() {
    document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => {
      activeTab = button.dataset.tab;
      gamesView = "list";
      renderShell();
      haptic("light");
    }));
    document.querySelectorAll('[data-action="toggle-mode"]').forEach(button => button.addEventListener("click", toggleMode));
    document.querySelector('[data-action="topup"]')?.addEventListener("click", openTopupChoice);
    document.querySelectorAll('[data-action="case"]').forEach(card => card.addEventListener("click", () => openCaseDetail(card.dataset.case)));
    document.querySelectorAll('[data-action="soon"]').forEach(card => card.addEventListener("click", openComingSoon));
    document.querySelector('[data-action="open-crash"]')?.addEventListener("click", () => { gamesView = "crash"; renderShell(); haptic("medium"); });
    document.querySelector('[data-action="back-games"]')?.addEventListener("click", () => { gamesView = "list"; renderShell(); haptic("light"); });
    document.querySelectorAll('[data-action="sell"]').forEach(button => button.addEventListener("click", () => sellGift(button.dataset.item)));
    document.querySelectorAll('[data-action="withdraw"]').forEach(button => button.addEventListener("click", () => withdrawGift(button.dataset.item)));
    document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => { state.language = button.dataset.language; storage.save(); renderShell(); }));
  }

  function toggleMode() {
    state.mode = state.mode === "real" ? "demo" : "real"; storage.save();
    toast(`${t("modeSwitched")}: ${state.mode === "demo" ? t("demoMode") : t("realMode")}`); renderShell(); haptic("medium");
  }

  function getDailyRemaining() {
    const elapsed = Date.now() - Number(modeState().daily.lastOpenedAt || 0);
    return Math.max(0, 86400000 - elapsed);
  }
  function formatDuration(ms) {
    const seconds = Math.max(0, Math.ceil(ms / 1000));
    const h = String(Math.floor(seconds / 3600)).padStart(2,"0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2,"0");
    const s = String(seconds % 60).padStart(2,"0");
    return `${h}:${m}:${s}`;
  }

  function startClock() {
    clearInterval(clockTimer);
    clockTimer = setInterval(() => {
      document.querySelectorAll("[data-cooldown]").forEach(el => el.textContent = formatDuration(getDailyRemaining()));
    }, 1000);
  }

  function showModal(content, options = {}) {
    closeModal();
    const root = document.getElementById("modal-root");
    const backdrop = document.createElement("div");
    backdrop.className = `modal-backdrop${options.fullscreen ? " fullscreen-backdrop" : ""}`;
    backdrop.innerHTML = `<div class="modal ${options.wide ? "wide" : ""}" role="dialog" aria-modal="true">${options.closable === false ? "" : `<button class="modal-close" data-close aria-label="${t("close")}">×</button>`}${content}</div>`;
    root.appendChild(backdrop); currentModal = backdrop;
    if (options.fullscreen) backdrop.firstElementChild.classList.add("fullscreen");
    if (options.className) backdrop.firstElementChild.classList.add(...String(options.className).split(" ").filter(Boolean));
    backdrop.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
    if (options.dismiss !== false) backdrop.addEventListener("click", event => { if (event.target === backdrop) closeModal(); });
    return backdrop;
  }
  function closeModal() { currentModal?.remove(); currentModal = null; }

  function confirmModal(title, text) {
    return new Promise(resolve => {
      const modal = showModal(`<h2>${escapeHtml(title)}</h2><p class="modal-desc">${escapeHtml(text)}</p><div class="modal-actions"><button class="btn btn-primary" data-confirm>${t("yes")}</button><button class="btn btn-ghost" data-cancel>${t("no")}</button></div>`, { dismiss: false });
      modal.querySelector("[data-confirm]").addEventListener("click", () => { closeModal(); resolve(true); });
      modal.querySelector("[data-cancel]").addEventListener("click", () => { closeModal(); resolve(false); });
      modal.querySelector("[data-close]")?.addEventListener("click", () => resolve(false), { once: true });
    });
  }

  function renderRewardCard(reward) {
    const value = reward.type === "stars" ? reward.name : `★${fmt(reward.value || reward.max || 0)}`;
    return `<div class="reward-card"><img src="${reward.image}" alt="${escapeHtml(reward.name)}"><div class="reward-name">${escapeHtml(reward.name)}</div><div class="reward-value">${value}</div></div>`;
  }

  function pickReward(caseData) {
    const roll = Math.random() * 100;
    let cursor = 0;
    let selected = caseData.rewards[caseData.rewards.length - 1][0];
    for (const [reward, chance] of caseData.rewards) { cursor += chance; if (roll < cursor) { selected = reward; break; } }
    if (selected.type === "stars-range") {
      const value = Math.floor(selected.min + Math.random() * (selected.max - selected.min + 1));
      return { ...selected, id: `${selected.id}-${value}`, name: `${value} Stars`, value, type: "stars" };
    }
    return { ...selected };
  }

  function spendBalance(amount, data = modeState()) {
    amount = Number(amount);
    if (!Number.isFinite(amount) || amount <= 0 || totalBalance(data) < amount) return null;
    const fromDeposit = Math.min(data.depositedStarsBalance, amount);
    const fromBonus = amount - fromDeposit;
    data.depositedStarsBalance -= fromDeposit; data.bonusStarsBalance -= fromBonus;
    return { fromDeposit, fromBonus };
  }



  function openCaseDetail(caseId) {
    const caseData = CASES[caseId]; if (!caseData) return;
    const remaining = caseId === "daily" ? getDailyRemaining() : 0;
    const previewItems = getRoulettePreviewItems(caseData);
    const rewards = caseData.rewards.map(([reward]) => normalizeRouletteItem(reward));
    const modal = showModal(`<h2 class="case-detail-title">${caseData.name}</h2>
      <div class="case-detail-hero"><img src="${caseData.image}" alt="${caseData.name}"></div>
      ${renderRoulette(previewItems)}
      <div class="modal-actions case-open-actions"><button class="btn btn-primary" data-open-case ${remaining ? "disabled" : ""}>${remaining ? `${t("nextOpening")} ${formatDuration(remaining)}` : `${t("open")} · ★${fmt(caseData.price)}`}</button></div>
      <div class="case-rewards"><h3>${t("possibleRewards")}</h3><div class="reward-grid">${rewards.map(renderRewardCard).join("")}</div></div>`, { wide: true, fullscreen: true, dismiss: false, className: "case-detail-modal" });
    modal.querySelector("[data-open-case]")?.addEventListener("click", () => beginCaseOpening(caseId, modal));
  }

  function getRoulettePreviewItems(caseData) {
    const source = caseData.displayRewards?.length ? caseData.displayRewards : caseData.rewards.map(([item]) => item);
    return Array.from({ length: 36 }, (_, index) => normalizeRouletteItem(source[index % source.length]));
  }

  function normalizeRouletteItem(item) {
    if (item.type === "stars-range") return { ...item, value: item.max };
    return item;
  }

  function renderRoulette(items) {
    return `<div class="roulette-viewport"><div class="roulette-pointer"></div><div class="roulette-track">${items.map(item => `<div class="roulette-item"><img src="${item.image}" alt="${escapeHtml(item.name || "")}"></div>`).join("")}</div></div>`;
  }

  function beginCaseOpening(caseId, modal = null) {
    const caseData = CASES[caseId]; const data = modeState();
    if (caseId === "daily" && !data.daily.unlocked) { openDailyTasks(); return; }
    if (caseId === "daily" && getDailyRemaining() > 0) { toast(`${t("nextOpening")} ${formatDuration(getDailyRemaining())}`); return; }
    if (totalBalance(data) < caseData.price) { toast(t("insufficient")); haptic("heavy"); return; }
    const reward = pickReward(caseData);
    const spent = spendBalance(caseData.price, data); if (!spent) return;
    data.stats.starsSpent += caseData.price;
    storage.save();
    animateCase(caseData, reward, modal);
  }

  function animateCase(caseData, reward, modal = null) {
    const pool = caseData.rewards.map(([item]) => item);
    const selectedIndex = 96;
    const items = Array.from({ length: 108 }, (_, index) => {
      if (index === selectedIndex) return reward;
      const random = pool[Math.floor(Math.random() * pool.length)];
      return normalizeRouletteItem(random);
    });
    const targetModal = modal || showModal(`<h2>${caseData.name}</h2><p class="modal-desc" data-case-status>${t("waiting")}...</p>${renderRoulette(items)}`, { closable: false, dismiss: false, wide: true });
    const button = targetModal.querySelector("[data-open-case]");
    const status = targetModal.querySelector("[data-case-status]");
    const close = targetModal.querySelector("[data-close]");
    const viewport = targetModal.querySelector(".roulette-viewport");
    const track = targetModal.querySelector(".roulette-track");
    if (!viewport || !track) return;
    if (button) { button.disabled = true; button.textContent = `${t("waiting")}...`; }
    if (status) status.textContent = `${t("waiting")}...`;
    close?.remove();
    track.style.transition = "none";
    track.style.transform = "translate3d(0,0,0)";
    track.innerHTML = items.map(item => `<div class="roulette-item"><img src="${item.image}" alt="${escapeHtml(item.name || "")}"></div>`).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const itemWidth = 82, gap = 10;
      const target = viewport.clientWidth / 2 - (selectedIndex * (itemWidth + gap) + itemWidth / 2);
      track.style.transition = `transform ${matchMedia("(prefers-reduced-motion: reduce)").matches ? .8 : 4.35}s cubic-bezier(.12,.72,.12,1)`;
      track.style.transform = `translate3d(${target}px,0,0)`;
      const duration = matchMedia("(prefers-reduced-motion: reduce)").matches ? 850 : 4400;
      setTimeout(() => finalizeCaseWin(caseData, reward), duration);
    }));
  }

  function finalizeCaseWin(caseData, reward) {
    const data = modeState(); const recordId = uid("win"); const time = Date.now();
    if (reward.type === "stars") {
      data.bonusStarsBalance += reward.value; data.stats.starsWon += reward.value;
    } else {
      data.inventory.unshift({ instanceId: recordId, giftId: reward.id, name: reward.name, value: reward.value, image: reward.image, sourceCase: caseData.name, wonAt: time, status: "available", validWin: true });
    }
    data.stats.casesOpened += 1; data.stats.biggestWin = Math.max(data.stats.biggestWin, reward.value);
    if (caseData.id === "daily") data.daily.lastOpenedAt = time;
    const caseRecord = { id: recordId, user: state.user, mode: state.mode, caseId: caseData.id, caseName: caseData.name, rewardId: reward.id, rewardName: reward.name, value: reward.value, type: reward.type, paid: caseData.price, time };
    data.caseHistory.unshift(caseRecord);
    state.liveDrops.unshift({ id: reward.id, name: reward.name, value: reward.value, image: reward.image, time }); state.liveDrops = state.liveDrops.slice(0,30);
    storage.save(); haptic("medium");
    if (state.mode === "real") void apiRequest("/api/history/case", { method: "POST", body: caseRecord });
    const modal = showModal(`<div class="win-display"><div class="eyebrow">${t("won")}</div><img src="${reward.image}" alt="${escapeHtml(reward.name)}"><h2>${escapeHtml(reward.name)}</h2><div class="win-value"><span class="star">★</span> ${fmt(reward.value)}</div><p class="modal-desc">${reward.type === "stars" ? t("addedBalance") : t("addedInventory")}</p></div><div class="modal-actions"><button class="btn btn-primary" data-win-close>${t("continue")}</button></div>`, { dismiss: false });
    modal.querySelector("[data-win-close]").addEventListener("click", () => { closeModal(); renderShell(); });
  }

  function dailyTasksCompleted(daily = modeState().daily) {
    return Boolean(daily.channelOpened && daily.chatOpened && daily.shares >= 3);
  }
  function openUnlockedDailyCase() {
    const daily = modeState().daily;
    if (!dailyTasksCompleted(daily)) return false;
    daily.unlocked = true; storage.save();
    toast(state.language === "ru" ? "Задания выполнены. Открываем Daily Case." : "Tasks complete. Opening Daily Case.");
    closeModal();
    openCaseDetail("daily");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const button = currentModal?.querySelector("[data-open-case]");
      if (button && !button.disabled) button.click();
    }));
    return true;
  }
  function refreshDailyTasksOrOpen() {
    setTimeout(() => { if (!openUnlockedDailyCase()) openDailyTasks(); }, 250);
  }

  function openDailyTasks() {
    const daily = modeState().daily;
    const modal = showModal(`<h2>${t("dailyAccess")}</h2><p class="modal-desc">${t("dailyAccessText")}</p>
      <div class="tasks">
        ${taskRow("channel", t("subscribe"), daily.channelOpened, t("subscribe"))}
        ${taskRow("chat", t("joinChat"), daily.chatOpened, t("joinChat"))}
        ${taskRow("share", `${t("shareThree")} (${daily.shares}/3)`, daily.shares >= 3, t("shareFriend"))}
      </div><div id="task-notice"></div><div class="modal-actions"><button class="btn btn-primary" data-verify-tasks>${t("verify")}</button></div>`);
    modal.querySelector('[data-task="channel"]')?.addEventListener("click", () => { daily.channelOpened = true; storage.save(); openLink(LOCAL_CONFIG.projectChannel); refreshDailyTasksOrOpen(); });
    modal.querySelector('[data-task="chat"]')?.addEventListener("click", () => { daily.chatOpened = true; storage.save(); openLink(LOCAL_CONFIG.projectChat); refreshDailyTasksOrOpen(); });
    modal.querySelector('[data-task="share"]')?.addEventListener("click", () => {
      daily.shares = clamp(daily.shares + 1, 0, 3); storage.save();
      const text = state.language === "ru" ? "Открой Daily Case в Cherry Case! Играй, открывай кейсы и выигрывай Telegram-подарки!" : "Open Daily Case in Cherry Case! Play, open cases and win Telegram Gifts!";
      openLink(`https://t.me/share/url?url=${encodeURIComponent(LOCAL_CONFIG.miniAppUrl)}&text=${encodeURIComponent(text)}`); refreshDailyTasksOrOpen();
    });
    modal.querySelector("[data-verify-tasks]").addEventListener("click", verifyDailyTasks);
  }
  function taskRow(id, name, done, action) {
    return `<div class="task ${done ? "done" : ""}"><div class="task-check">${done ? "✓" : "·"}</div><div class="task-name">${name}</div><button data-task="${id}">${action}</button></div>`;
  }
  function verifyDailyTasks() {
    const daily = modeState().daily; const notice = document.getElementById("task-notice");
    if (openUnlockedDailyCase()) return;
    if (!LOCAL_CONFIG.membershipConnected) { notice.innerHTML = `<div class="notice error">${t("verifyFailed")}</div>`; return; }
  }

  function renderInventory() {
    const items = modeState().inventory.filter(item => item.status !== "sent" && item.status !== "sold");
    return `<section class="page"><div class="hero"><div class="eyebrow">Cherry Vault</div><h1>${t("inventory")}</h1><p>${t("emptyInventoryText")}</p></div>
      <section class="section">${items.length ? `<div class="inventory-grid">${items.map(renderInventoryCard).join("")}</div>` : `<div class="empty-state glass"><div class="empty-icon">${svg.empty}</div><h2>${t("emptyInventory")}</h2><p>${t("emptyInventoryText")}</p><button class="btn btn-secondary" data-tab="cases">${t("cases")}</button></div>`}</section></section>`;
  }
  function renderInventoryCard(item) {
    const locked = item.status === "pending" || item.status === "approved";
    const actions = locked
      ? `<button class="locked" disabled>${t("pending")}</button><button class="locked" disabled>${t("withdraw")}</button>`
      : `<button class="sell" data-action="sell" data-item="${item.instanceId}">${t("sell")}</button>${state.mode === "demo" ? `<button class="locked" disabled>${t("demoWithdrawRealOnly")}</button>` : `<button class="withdraw" data-action="withdraw" data-item="${item.instanceId}">${t("withdraw")}</button>`}`;
    return `<article class="inventory-card glass"><div class="inventory-image"><img src="${item.image}" alt="${escapeHtml(item.name)}"></div><h3>${escapeHtml(item.name)}</h3><div class="source">${escapeHtml(item.sourceCase)}</div><div class="case-bottom"><span class="price"><span class="star">★</span>${fmt(item.value)}</span>${locked ? `<span class="status ${item.status}">${item.status === "approved" ? t("approve") : t("pending")}</span>` : ""}</div>
      <div class="inventory-actions">${actions}</div></article>`;
  }

  async function sellGift(instanceId) {
    const data = modeState(); const item = data.inventory.find(entry => entry.instanceId === instanceId);
    if (!item || item.status !== "available") return;
    if (!await confirmModal(item.name, t("confirmSell"))) return;
    const amount = Math.round(item.value * 1.05 * 100) / 100;
    item.status = "sold"; data.bonusStarsBalance += amount; data.stats.starsWon += amount;
    data.soldHistory.unshift({ id: uid("sale"), itemId: item.instanceId, name: item.name, value: item.value, received: amount, time: Date.now() });
    storage.save(); toast(`${t("soldFor")} ★${fmt(amount)}`); renderShell(); haptic("medium");
  }

  async function withdrawGift(instanceId) {
    const data = modeState(); const item = data.inventory.find(entry => entry.instanceId === instanceId);
    if (!item || item.status !== "available") return;
    if (state.mode === "demo") { toast(t("demoWithdrawRealOnly")); haptic("heavy"); return; }
    if (!await confirmModal(item.name, t("confirmWithdraw"))) return;
    const caseWin = data.caseHistory.find(record => record.id === item.instanceId && record.rewardId === item.giftId);
    const duplicate = data.withdrawals.some(request => request.itemId === item.instanceId && request.status !== "rejected");
    const checks = { itemExists: true, validWin: Boolean(item.validWin && caseWin), casePaid: Boolean(caseWin?.paid), notSold: item.status !== "sold", notWithdrawn: !["sent"].includes(item.status), notDuplicate: !duplicate };
    const suspicious = Object.values(checks).some(value => !value);
    const request = {
      id: uid("withdraw"), itemId: item.instanceId, giftId: item.giftId, giftName: item.name, giftValue: item.value, giftImage: item.image,
      sourceCase: item.sourceCase, status: "pending", mode: state.mode, time: Date.now(), user: { ...state.user }, checks, suspicious,
      totalDeposits: data.paymentHistory.filter(p => p.status === "paid").reduce((sum,p) => sum + Number(p.amount || 0),0),
      balance: totalBalance(data), inventoryValue: inventoryValue(data), emailStatus: state.mode === "demo" ? "skipped-demo" : "skipped-no-resend-key"
    };
    item.status = "pending"; data.withdrawals.unshift(request);
    if (state.mode === "real") console.info("Email skipped: RESEND_API_KEY not configured");
    storage.save(); toast(t("withdrawalCreated")); renderShell(); haptic("medium");
  }

  function renderProfile() {
    const data = modeState(); const user = state.user;
    const initial = (user.firstName || "G").slice(0,1).toUpperCase();
    const labels = state.language === "ru"
      ? { settings: "Настройки", purchases: "История покупок", caseHistory: "История кейсов", gameHistory: "История игр", withdrawals: "История выводов", sold: "Проданные подарки", recent: "последние записи" }
      : { settings: "Settings", purchases: "Purchase history", caseHistory: "Case history", gameHistory: "Game history", withdrawals: "Withdrawal history", sold: "Sold gifts", recent: "latest records" };
    const withdrawals = data.withdrawals.slice(0,5);
    const sold = data.soldHistory.slice(0,5);
    const purchases = data.paymentHistory.slice(0,5);
    const cases = data.caseHistory.slice(0,5);
    const games = data.gameHistory.slice(0,5);
    return `<section class="page"><div class="hero"><div class="eyebrow">Cherry ID</div><h1>${t("profileTitle")}</h1></div>
      <article class="profile-card profile-main glass"><div class="identity"><div class="avatar">${user.avatar ? `<img src="${escapeHtml(user.avatar)}" alt="">` : initial}</div><div><h2>${escapeHtml(user.username || "Guest")}</h2><p>${t("telegramId")}: ${escapeHtml(user.id)}</p></div></div>
        <div class="stats-grid">${[
          [t("mode"), state.mode === "demo" ? t("demoMode") : t("realMode")], [t("balance"), `★${fmt(totalBalance(data))}`],
          [t("deposited"), `★${fmt(data.depositedStarsBalance)}`], [t("bonus"), `★${fmt(data.bonusStarsBalance)}`],
          [t("casesOpened"), fmt(data.stats.casesOpened)], [t("starsSpent"), `★${fmt(data.stats.starsSpent)}`],
          [t("starsWon"), `★${fmt(data.stats.starsWon)}`], [t("inventoryValue"), `★${fmt(inventoryValue(data))}`],
          [t("biggestWin"), `★${fmt(data.stats.biggestWin)}`]
        ].map(([label,value]) => `<div class="stat"><div class="stat-label">${label}</div><div class="stat-value">${value}</div></div>`).join("")}</div></article>
      <article class="profile-card profile-panel glass"><div class="profile-section-title"><div><h2>${labels.settings}</h2><span>${state.mode === "demo" ? t("demoMode") : t("realMode")}</span></div></div>
        <div class="settings-row"><div><div class="settings-label">${t("language")}</div><div class="settings-note">Русский / English</div></div><div class="segmented"><button data-language="ru" class="${state.language === "ru" ? "active" : ""}">RU</button><button data-language="en" class="${state.language === "en" ? "active" : ""}">EN</button></div></div>
        <div class="settings-row"><div><div class="settings-label">${state.mode === "demo" ? t("demoMode") : t("realMode")}</div><div class="settings-note">${state.mode === "demo" ? t("demoModeNotice") : t("realModeNotice")}</div></div><button class="mode-badge ${state.mode}" data-action="toggle-mode">${state.mode === "demo" ? t("real") : t("demo")}</button></div></article>
      <section class="profile-history-grid">
        ${renderProfilePanel(labels.purchases, labels.recent, renderProfileHistory(purchases, "purchase"))}
        ${renderProfilePanel(labels.caseHistory, labels.recent, renderProfileHistory(cases, "case"))}
        ${renderProfilePanel(labels.gameHistory, labels.recent, renderProfileHistory(games, "game"))}
        ${renderProfilePanel(labels.withdrawals, labels.recent, renderProfileHistory(withdrawals, "withdraw"))}
        ${renderProfilePanel(labels.sold, labels.recent, renderProfileHistory(sold, "sale"))}
      </section></section>`;
  }
  function renderProfilePanel(title, subtitle, content) {
    return `<article class="profile-card profile-panel glass"><div class="profile-section-title"><div><h2>${title}</h2><span>${subtitle}</span></div></div>${content}</article>`;
  }
  function renderProfileHistory(rows, type) {
    if (!rows.length) return `<div class="notice">${t("noHistory")}</div>`;
    return `<div class="history-list">${rows.map(row => {
      let title = row.name || row.giftName || "Record";
      let subtitle = dateTime(row.time);
      let badge = "";
      let statusClass = "approved";
      if (type === "withdraw") {
        title = row.giftName;
        subtitle = `${dateTime(row.time)} · ${row.sourceCase || ""}`;
        badge = row.status || t("pending");
        statusClass = row.status || "pending";
      } else if (type === "sale") {
        title = row.name;
        subtitle = `${dateTime(row.time)} · ★${fmt(row.received)}`;
        badge = `+★${fmt(row.received)}`;
      } else if (type === "case") {
        title = `${row.caseName || t("cases")} → ${row.rewardName || ""}`;
        subtitle = `${dateTime(row.time)} · ${t("price")}: ★${fmt(row.paid)}`;
        badge = `+★${fmt(row.value)}`;
      } else if (type === "game") {
        title = `Crash #${row.roundId || "—"}`;
        subtitle = `${dateTime(row.time)} · ${Number(row.crashMultiplier || 0).toFixed(2)}x`;
        badge = row.result === "cashout" ? `+★${fmt(row.win)}` : t("lost");
        statusClass = row.result === "cashout" ? "approved" : "rejected";
      } else if (type === "purchase") {
        title = row.title || "Telegram Stars";
        subtitle = `${dateTime(row.time)} · ★${fmt(row.amount)}`;
        badge = row.status || t("pending");
        statusClass = row.status === "paid" ? "approved" : (row.status || "pending");
      }
      return `<div class="history-row"><div><div class="history-title">${escapeHtml(title)}</div><div class="history-sub">${escapeHtml(subtitle)}</div></div><span class="status ${escapeHtml(statusClass)}">${escapeHtml(badge)}</span></div>`;
    }).join("")}</div>`;
  }

  function renderGames() {
    const crashOpen = gamesView === "crash";
    const backLabel = state.language === "ru" ? "Назад" : "Back";
    return `<section class="page">
      <div id="games-list" class="${crashOpen ? "is-hidden" : ""}">
        <div class="hero"><div class="eyebrow">Cherry Arcade</div><h1>${t("gamesHero")}</h1><p>${t("gamesSub")}</p></div>
        <section class="section"><div class="games-grid">
          ${renderGameCard("Crash", t("crashSub"), svg.crash, "open-crash", t("playable"))}
          ${renderGameCard("Mines", t("comingSoonText"), svg.clock, "soon", t("comingSoon"))}
          ${renderGameCard("Slots", t("comingSoonText"), svg.clock, "soon", t("comingSoon"))}
          ${renderGameCard("Wheel of Fortune", t("comingSoonText"), svg.clock, "soon", t("comingSoon"))}
        </div></section>
      </div>
      <section id="crash-screen" class="${crashOpen ? "" : "is-hidden"}">
        <div class="crash-screen-head"><button class="game-back" data-action="back-games">‹ ${backLabel}</button><div class="section-meta">${t("playable")}</div></div>
        ${renderCrash()}
      </section>
    </section>`;
  }
  function renderGameCard(name, description, icon, action, badge) {
    return `<article class="game-card glass" data-action="${action}"><div class="game-icon">${icon}</div><div><h3>${name}</h3><p>${description}</p></div>${action === "soon" ? `<span class="soon-badge">${badge}</span>` : `<span class="arrow">›</span>`}</article>`;
  }
  function openComingSoon() { showModal(`<h2>${t("comingSoon")}</h2><p class="modal-desc">${t("comingSoonText")}</p><div class="modal-actions"><button class="btn btn-primary" data-close>${t("close")}</button></div>`); }

  function openTopupChoice() {
    const modal = showModal(`<h2>${t("balanceTopUp")}</h2><p class="modal-desc">${state.mode === "demo" ? t("switchReal") : t("realModeNotice")}</p><div class="modal-actions"><button class="btn btn-primary" data-stars-topup>${t("topUpStars")}</button><button class="btn btn-secondary" data-admin-topup>${t("adminTopUp")}</button></div>`);
    modal.querySelector("[data-stars-topup]").addEventListener("click", openStarsTopup);
    modal.querySelector("[data-admin-topup]").addEventListener("click", openAdminTopup);
  }
  function openAdminTopup() {
    const modal = showModal(`<h2>${t("adminTopUp")}</h2><p class="modal-desc">${t("adminTopUpText")}</p><div class="modal-actions"><button class="btn btn-primary" data-contact>${t("contact")}</button><button class="btn btn-ghost" data-close>${t("close")}</button></div>`);
    modal.querySelector("[data-contact]").addEventListener("click", () => openLink("https://t.me/RadioArseny"));
  }
  function openStarsTopup() {
    const disabled = state.mode === "demo";
    const modal = showModal(`<h2>${t("topUpTitle")}</h2><p class="modal-desc">${disabled ? t("switchReal") : t("paymentsOffline")}</p>
      <div class="preset-grid">${[50,100,250,500,1000].map(n => `<button class="preset" data-preset="${n}">${n}</button>`).join("")}</div>
      <div class="field"><label>${t("customAmount")}</label><input id="topup-amount" class="input" type="number" inputmode="numeric" min="1" step="1" placeholder="100" ${disabled ? "disabled" : ""}></div>
      <div class="field"><label>${t("promoCode")}</label><div class="inline-field"><input id="promo-input" class="input" autocomplete="off" placeholder="${t("promoCode")}"><button class="btn btn-secondary" data-apply-promo>${t("apply")}</button></div></div><div id="promo-notice"></div>
      <div class="notice">${t("paymentsOffline")}</div><div class="modal-actions"><button class="btn btn-gold" data-pay ${disabled ? "disabled" : ""}>${t("pay")}</button></div>`);
    modal.querySelectorAll("[data-preset]").forEach(button => button.addEventListener("click", () => { modal.querySelectorAll("[data-preset]").forEach(b => b.classList.remove("active")); button.classList.add("active"); modal.querySelector("#topup-amount").value = button.dataset.preset; }));
    modal.querySelector("[data-apply-promo]").addEventListener("click", applyPromo);
    modal.querySelector("[data-pay]")?.addEventListener("click", () => { modal.querySelector("#promo-notice").innerHTML = `<div class="notice error">${t("paymentsOffline")}</div>`; });
  }
  function applyPromo() {
    const value = document.getElementById("promo-input")?.value.trim();
    if (value === "/admin") { openAdminAccess(); return; }
    const notice = document.getElementById("promo-notice"); if (notice) notice.innerHTML = `<div class="notice error">${t("promoNotFound")}</div>`;
  }
  function openAdminAccess() {
    const modal = showModal(`<h2>${t("adminAccess")}</h2><div class="field"><label>${t("enterSecret")}</label><input id="admin-secret" class="input" type="password" autocomplete="off"></div><div id="admin-error"></div><div class="modal-actions"><button class="btn btn-primary" data-open-admin>${t("openAdmin")}</button></div>`);
    const submit = () => {
      if (modal.querySelector("#admin-secret").value !== LOCAL_CONFIG.adminSecret) { modal.querySelector("#admin-error").innerHTML = `<div class="notice error">${t("invalidSecret")}</div>`; return; }
      activeAdminTab = "users"; openAdminPanel();
    };
    modal.querySelector("[data-open-admin]").addEventListener("click", submit);
    modal.querySelector("#admin-secret").addEventListener("keydown", e => { if (e.key === "Enter") submit(); });
  }

  function openAdminPanel() {
    const modal = showModal(`<h2>${t("adminPanel")}</h2><p class="modal-desc">${t("localOnly")}</p><div class="admin-tabs">${[
      ["users",t("users")],["inventories",t("inventory")],["withdrawals",t("withdrawals")],["cases",t("caseHistory")],["games",t("gameHistory")],["payments",t("payments")],["warnings",t("warnings")]
    ].map(([id,label]) => `<button data-admin-tab="${id}" class="${activeAdminTab === id ? "active" : ""}">${label}</button>`).join("")}</div><div id="admin-content">${renderAdminContent()}</div>`, { wide: true });
    modal.querySelectorAll("[data-admin-tab]").forEach(button => button.addEventListener("click", () => { activeAdminTab = button.dataset.adminTab; openAdminPanel(); }));
    bindAdminEvents(modal);
  }
  function renderAdminContent() {
    const real = state.real; const demo = state.demo;
    if (activeAdminTab === "users") return `<div class="admin-table"><div class="admin-item"><div class="admin-item-head"><span>${escapeHtml(state.user.username)}</span><span>${escapeHtml(state.user.id)}</span></div><p>Real: ★${fmt(totalBalance(real))} (${t("deposited")}: ${fmt(real.depositedStarsBalance)}, ${t("bonus")}: ${fmt(real.bonusStarsBalance)})<br>Demo: ★${fmt(totalBalance(demo))}<br>${t("inventory")}: ${real.inventory.filter(i=>i.status!=="sold"&&i.status!=="sent").length}</p></div></div>
      <div class="field"><label>${t("users")}</label><select id="admin-user" class="input"><option value="${escapeHtml(state.user.id)}">${escapeHtml(state.user.username)} · ${escapeHtml(state.user.id)}</option></select></div><div class="field"><label>${t("amount")}</label><input id="admin-amount" class="input" type="number" min="1" step="1" placeholder="100"></div><label class="notice"><input type="checkbox" id="admin-deposit"> ${t("asDeposit")}</label><div class="modal-actions"><button class="btn btn-primary" data-admin-add>${t("addStars")}</button></div><div id="admin-notice"></div>`;
    if (activeAdminTab === "inventories") {
      const rows = [...real.inventory.map(item => ({...item, mode:"real"})), ...demo.inventory.map(item => ({...item, mode:"demo"}))];
      return rows.length ? `<div class="admin-table">${rows.map(item => `<div class="admin-item"><div class="admin-item-head"><span>${escapeHtml(item.name)} · ★${fmt(item.value)}</span><span class="status ${item.status}">${escapeHtml(item.status)}</span></div><p>${escapeHtml(item.mode)} · ${escapeHtml(item.sourceCase)}<br>${escapeHtml(item.instanceId)}</p></div>`).join("")}</div>` : `<div class="notice">${t("noData")}</div>`;
    }
    if (activeAdminTab === "withdrawals") return renderAdminWithdrawals();
    if (activeAdminTab === "cases") return renderAdminLogs(real.caseHistory, row => `${row.caseName} → ${row.rewardName} · ★${fmt(row.value)} · ${dateTime(row.time)}`);
    if (activeAdminTab === "games") return renderAdminLogs(real.gameHistory, row => `Crash #${row.roundId} · ${row.result} · ★${fmt(row.bet)} · ${dateTime(row.time)}`);
    if (activeAdminTab === "payments") return renderAdminLogs(real.paymentHistory, row => `${row.status} · ★${fmt(row.amount)} · ${dateTime(row.time)}`);
    return renderWarnings();
  }
  function renderAdminLogs(rows, mapper) {
    return rows.length ? `<div class="admin-table">${rows.slice(0,50).map(row => `<div class="admin-item">${escapeHtml(mapper(row))}</div>`).join("")}</div>` : `<div class="notice">${t("noData")}</div>`;
  }
  function renderAdminWithdrawals() {
    const rows = [...state.real.withdrawals, ...state.demo.withdrawals].sort((a,b)=>b.time-a.time);
    return rows.length ? `<div class="admin-table">${rows.map(row => `<div class="admin-item"><div class="admin-item-head"><span>${escapeHtml(row.giftName)} · ★${fmt(row.giftValue)}</span><span class="status ${row.status}">${row.status}</span></div><p>${escapeHtml(row.id)}<br>${escapeHtml(row.user.username)} · ${escapeHtml(row.user.id)} · ${escapeHtml(row.mode)}<br>${escapeHtml(row.sourceCase)} · ${dateTime(row.time)}${row.suspicious ? "<br>WARNING: Suspicious withdrawal request. Manual review required." : ""}</p><div class="admin-actions">${row.status === "pending" ? `<button data-withdraw-action="approve" data-request="${row.id}" data-mode="${row.mode}">${t("approve")}</button><button data-withdraw-action="reject" data-request="${row.id}" data-mode="${row.mode}">${t("reject")}</button>` : ""}${row.status === "approved" ? `<button data-withdraw-action="sent" data-request="${row.id}" data-mode="${row.mode}">${t("markSent")}</button>` : ""}</div></div>`).join("")}</div>` : `<div class="notice">${t("noData")}</div>`;
  }
  function renderWarnings() {
    const rows = state.real.withdrawals.filter(row => row.suspicious || row.totalDeposits <= 0);
    if (!rows.length) return `<div class="notice success">${t("noData")}</div>`;
    return `<div class="admin-table">${rows.map(row => `<div class="admin-item"><div class="admin-item-head"><span>${escapeHtml(row.id)}</span><span class="status rejected">WARNING</span></div><p>${row.totalDeposits <= 0 ? t("suspiciousNoDeposit") : t("suspiciousBonus")}<br>${escapeHtml(row.giftName)} · ${escapeHtml(row.user.username)}</p></div>`).join("")}</div>`;
  }
  function bindAdminEvents(modal) {
    modal.querySelector("[data-admin-add]")?.addEventListener("click", () => {
      const amount = Number(modal.querySelector("#admin-amount").value); const notice = modal.querySelector("#admin-notice");
      if (!Number.isFinite(amount) || amount <= 0) { notice.innerHTML = `<div class="notice error">${t("amount")}: &gt; 0</div>`; return; }
      const deposit = modal.querySelector("#admin-deposit").checked;
      if (deposit) state.real.depositedStarsBalance += amount; else state.real.bonusStarsBalance += amount;
      state.real.adminHistory.unshift({ id: uid("admin"), action: "add-stars", amount, deposit, userId: state.user.id, time: Date.now() });
      storage.save(); toast(`${t("added")}: ★${fmt(amount)}`); openAdminPanel();
    });
    modal.querySelectorAll("[data-withdraw-action]").forEach(button => button.addEventListener("click", () => updateWithdrawal(button.dataset.mode, button.dataset.request, button.dataset.withdrawAction)));
  }
  function updateWithdrawal(mode, requestId, action) {
    const data = state[mode]; const request = data.withdrawals.find(row => row.id === requestId); if (!request) return;
    const item = data.inventory.find(row => row.instanceId === request.itemId);
    if (action === "reject") { request.status = "rejected"; if (item) item.status = "available"; }
    if (action === "approve") { request.status = "approved"; if (item) item.status = "approved"; }
    if (action === "sent") { request.status = "sent"; if (item) item.status = "sent"; }
    request.updatedAt = Date.now(); data.adminHistory.unshift({ id: uid("admin"), action: `withdraw-${action}`, requestId, time: Date.now() });
    storage.save(); openAdminPanel();
  }

  function renderCrash() {
    const history = modeState().crashHistory || [];
    return `<section class="section" id="crash-game"><div class="section-head"><h2>${t("crashTitle")}</h2><div class="section-meta">${t("playable")}</div></div>
      <div id="crash-card" class="crash-card glass"><div id="crash-stage" class="crash-stage"><canvas id="crash-canvas"></canvas><div class="round-id" id="round-id">#—</div><div class="crash-center"><div id="crash-multiplier" class="multiplier">1.00x</div><div id="round-state" class="round-state">${t("waiting")}</div></div></div><div id="crash-message" class="crash-message">${t("crashSub")}</div></div>
      <div class="crash-panel glass"><div class="field"><label>${t("amount")}</label><input id="bet-amount" class="input" type="number" inputmode="decimal" min="1" step="1" value="10"></div><div class="bet-row"><button class="btn btn-primary" id="bet-button">${t("placeBet")}</button><button class="btn cashout-btn" id="cashout-button" disabled>${t("cashOut")}</button></div></div>
      <div class="section" style="margin-top:16px"><div class="section-head"><h2>${t("history")}</h2></div><div id="crash-history" class="crash-history">${renderCrashHistory(history)}</div></div>
      <div class="section"><div class="section-head"><h2>${t("livePlayers")}</h2><div class="section-meta" id="players-count">0</div></div><div id="live-players" class="players"></div></div>
    </section>`;
  }
  function renderCrashHistory(history) {
    return history.slice(0,20).map(value => `<span class="${value >= 3 ? "high" : ""}">${Number(value).toFixed(2)}x</span>`).join("") || `<span>—</span>`;
  }

  function generateCrashMultiplier() {
    const roll = Math.random() * 100; let min, max;
    if (roll < 35) [min,max] = [1.00,1.20];
    else if (roll < 60) [min,max] = [1.20,1.50];
    else if (roll < 78) [min,max] = [1.50,2.00];
    else if (roll < 88) [min,max] = [2.00,3.00];
    else if (roll < 95) [min,max] = [3.00,5.00];
    else if (roll < 98) [min,max] = [5.00,10.00];
    else if (roll < 99.5) [min,max] = [10.00,25.00];
    else [min,max] = [25.00,50.00];
    let result = Number((min + Math.random() * (max - min)).toFixed(2));
    const previous = Number(modeState().crashHistory?.[0]);
    if (result === previous) result = Number(Math.min(max, result + .01).toFixed(2));
    return result;
  }
  function makeRound() {
    return {
      roundId: Date.now().toString(36).toUpperCase(), crashMultiplier: generateCrashMultiplier(), currentMultiplier: 1,
      status: "countdown", countdownEnds: Date.now()+3000, startedAt: 0, playerBet: 0, betSource: null,
      hasCashedOut: false, cashoutProcessed: false, cashoutMultiplier: 0, cashoutWin: 0, players: [], message: ""
    };
  }

  function startCrashEngine() {
    stopCrashEngine();
    crashEngine = { round: makeRound(), frame: 0, nextTimer: 0, lastDraw: 0 };
    document.getElementById("bet-button")?.addEventListener("click", placeCrashBet);
    document.getElementById("cashout-button")?.addEventListener("click", cashOutCrash);
    tickCrash();
  }
  function stopCrashEngine() {
    if (!crashEngine) return;
    cancelAnimationFrame(crashEngine.frame); clearTimeout(crashEngine.nextTimer); crashEngine = null;
  }
  function tickCrash() {
    if (!crashEngine || !document.getElementById("crash-stage")) { stopCrashEngine(); return; }
    const round = crashEngine.round; const now = performance.now();
    if (round.status === "countdown") {
      const remaining = Math.max(0, Math.ceil((round.countdownEnds - Date.now()) / 1000));
      if (Date.now() >= round.countdownEnds) { round.status = "running"; round.startedAt = now; round.currentMultiplier = 1; }
      updateCrashView(remaining);
    } else if (round.status === "running") {
      const elapsed = now - round.startedAt;
      const liveValue = Number(Math.exp(elapsed * .0001).toFixed(2));
      round.currentMultiplier = Math.min(round.crashMultiplier, Math.max(1, liveValue));
      if (round.currentMultiplier >= round.crashMultiplier) crashRound();
      updateCrashView(0);
    }
    drawCrashGraph();
    if (crashEngine && crashEngine.round.status !== "crashed") crashEngine.frame = requestAnimationFrame(tickCrash);
  }
  function crashRound() {
    if (!crashEngine) return;
    const round = crashEngine.round; round.currentMultiplier = round.crashMultiplier; round.status = "crashed";
    const data = modeState(); data.crashHistory.unshift(round.crashMultiplier); data.crashHistory = data.crashHistory.slice(0,20);
    if (round.playerBet > 0) {
      const gameRecord = { id: uid("game"), user: state.user, mode: state.mode, roundId: round.roundId, crashMultiplier: round.crashMultiplier, bet: round.playerBet, result: round.hasCashedOut ? "cashout" : "lost", cashoutMultiplier: round.cashoutMultiplier, win: round.cashoutWin, time: Date.now() };
      data.gameHistory.unshift(gameRecord);
      if (state.mode === "real") void apiRequest("/api/history/game", { method: "POST", body: gameRecord });
      if (!round.hasCashedOut) round.message = `${t("roundFell")} ${round.crashMultiplier.toFixed(2)}x. ${t("lost")} ★${fmt(round.playerBet)}`;
      else round.message = `${t("cashedOut")} ★${fmt(round.cashoutWin)} ${state.language === "ru" ? "на" : "at"} ${round.cashoutMultiplier.toFixed(2)}x\n${t("roundFell")} ${round.crashMultiplier.toFixed(2)}x`;
    } else round.message = `${t("roundFell")} ${round.crashMultiplier.toFixed(2)}x`;
    storage.save(); haptic("heavy"); updateCrashView(0); drawCrashGraph();
    const history = document.getElementById("crash-history"); if (history) history.innerHTML = renderCrashHistory(data.crashHistory);
    cancelAnimationFrame(crashEngine.frame);
    crashEngine.nextTimer = setTimeout(() => {
      if (!crashEngine || !document.getElementById("crash-stage")) return;
      crashEngine.round = makeRound(); tickCrash();
    }, 3000);
  }

  function updateCrashView(countdown) {
    if (!crashEngine) return; const round = crashEngine.round;
    const multiplier = document.getElementById("crash-multiplier"); const label = document.getElementById("round-state");
    const card = document.getElementById("crash-card"); const message = document.getElementById("crash-message");
    const betButton = document.getElementById("bet-button"); const cashoutButton = document.getElementById("cashout-button");
    const id = document.getElementById("round-id");
    if (!multiplier) return;
    id.textContent = `#${round.roundId}`; multiplier.textContent = `${round.currentMultiplier.toFixed(2)}x`;
    card.classList.toggle("crashed", round.status === "crashed");
    if (round.status === "countdown") label.textContent = `${t("startsIn")} ${countdown}`;
    else if (round.status === "running") label.textContent = t("flying");
    else label.textContent = t("crashed");
    message.innerHTML = escapeHtml(round.message || (round.playerBet ? `${t("betPlaced")}: ★${fmt(round.playerBet)}` : t("crashSub"))).replace("\n","<br>");
    betButton.disabled = round.status !== "countdown" || round.playerBet > 0;
    cashoutButton.disabled = round.status !== "running" || round.playerBet <= 0 || round.hasCashedOut;
    cashoutButton.textContent = round.status === "running" && round.playerBet > 0 && !round.hasCashedOut ? `${t("cashOut")} ★${fmt(round.playerBet * round.currentMultiplier)}` : t("cashOut");
    refreshLiveCrashPlayers();
    renderLivePlayers(round);
  }
  function refreshLiveCrashPlayers() {
    if (state.mode !== "real" || Date.now() - liveCrashPlayersFetchedAt < 2000) return;
    liveCrashPlayersFetchedAt = Date.now();
    apiRequest("/api/crash/players").then(data => {
      if (!data?.players) return;
      liveCrashPlayersCache = data.players.map(player => ({
        name: player.user?.username || "Guest",
        id: player.user?.id || "",
        avatar: player.user?.avatar || "",
        initial: userInitial(player.user),
        bet: Number(player.bet || 0),
        status: "playing",
        win: 0
      })).filter(player => player.id);
      if (crashEngine?.round) renderLivePlayers(crashEngine.round);
    });
  }
  function renderLivePlayers(round) {
    const root = document.getElementById("live-players"); if (!root) return;
    const ownPlayer = state.mode === "real" && round.playerBet > 0 ? [{
      name: state.user.username || "Guest",
      id: state.user.id || "local-guest",
      avatar: state.user.avatar || "",
      initial: userInitial(state.user),
      bet: round.playerBet,
      status: round.hasCashedOut ? "won" : (round.status === "crashed" ? "lost" : "playing"),
      win: round.cashoutWin
    }] : [];
    const playersById = new Map();
    if (state.mode === "real") liveCrashPlayersCache.forEach(player => playersById.set(player.id, player));
    ownPlayer.forEach(player => playersById.set(player.id, player));
    const players = Array.from(playersById.values());
    document.getElementById("players-count").textContent = players.length;
    if (!players.length) {
      root.innerHTML = `<div class="players-empty">${state.language === "ru" ? "Пока нет активных игроков" : "No active players yet"}</div>`;
      return;
    }
    root.innerHTML = players.map(player => `<div class="player"><span class="player-avatar">${player.avatar ? `<img src="${escapeHtml(player.avatar)}" alt="">` : escapeHtml(player.initial)}</span><span class="player-name"><strong>${escapeHtml(player.name)}</strong><small>ID: ${escapeHtml(player.id)}</small></span><span class="player-bet">★${fmt(player.bet)}</span><span class="player-result ${player.status}">${player.status === "won" ? `+★${fmt(player.win)}` : player.status === "lost" ? t("lost") : "…"}</span></div>`).join("");
  }

  async function placeCrashBet() {
    if (!crashEngine) return; const round = crashEngine.round;
    if (round.status !== "countdown") { toast(t("betOnlyCountdown")); return; }
    if (round.playerBet > 0) { toast(t("alreadyBet")); return; }
    const amount = Number(document.getElementById("bet-amount")?.value);
    if (!Number.isFinite(amount) || amount <= 0 || totalBalance() < amount) { toast(t("insufficient")); return; }
    const data = modeState(); const bonusUsed = Math.max(0, amount - data.depositedStarsBalance);
    if (state.mode === "real" && bonusUsed > 0) {
      const proceed = await bonusWarning(); if (!proceed || !crashEngine || crashEngine.round !== round || round.status !== "countdown") return;
    }
    const source = spendBalance(amount, data); if (!source) { toast(t("insufficient")); return; }
    round.playerBet = amount; round.betSource = source; data.stats.starsSpent += amount;
    storage.save(); updateTopbarBalance(); updateCrashView(Math.max(0,Math.ceil((round.countdownEnds-Date.now())/1000))); toast(`${t("betPlaced")}: ★${fmt(amount)}`); haptic("medium");
    if (state.mode === "real") void apiRequest("/api/crash/players", { method: "POST", body: { user: state.user, roundId: round.roundId, bet: amount, mode: state.mode } });
  }
  function bonusWarning() {
    return new Promise(resolve => {
      const modal = showModal(`<h2>${t("bonusWarning")}</h2><p class="modal-desc">${t("bonusWarningText")}</p><div class="modal-actions"><button class="btn btn-primary" data-bonus-continue>${t("continue")}</button><button class="btn btn-ghost" data-bonus-cancel>${t("cancel")}</button></div>`, { dismiss: false });
      modal.querySelector("[data-bonus-continue]").addEventListener("click", () => { closeModal(); resolve(true); });
      modal.querySelector("[data-bonus-cancel]").addEventListener("click", () => { closeModal(); resolve(false); });
      modal.querySelector("[data-close]")?.addEventListener("click", () => resolve(false), { once: true });
    });
  }
  function cashOutCrash() {
    if (!crashEngine) return; const round = crashEngine.round;
    if (round.status !== "running" || round.playerBet <= 0 || round.hasCashedOut || round.currentMultiplier >= round.crashMultiplier) return;
    round.hasCashedOut = true; round.cashoutProcessed = true; round.cashoutMultiplier = round.currentMultiplier;
    round.cashoutWin = Math.round(round.playerBet * round.cashoutMultiplier * 100) / 100;
    const data = modeState(); data.bonusStarsBalance += round.cashoutWin; data.stats.starsWon += round.cashoutWin; data.stats.biggestWin = Math.max(data.stats.biggestWin, round.cashoutWin);
    round.message = `${t("cashedOut")} ★${fmt(round.cashoutWin)} ${state.language === "ru" ? "на" : "at"} ${round.cashoutMultiplier.toFixed(2)}x`;
    storage.save(); updateTopbarBalance(); updateCrashView(0); toast(round.message); haptic("medium");
  }
  function updateTopbarBalance() { const el = document.querySelector(".balance-value"); if (el) el.textContent = fmt(totalBalance()); }

  function drawCrashGraph() {
    if (!crashEngine) return; const canvas = document.getElementById("crash-canvas"); if (!canvas) return;
    const rect = canvas.getBoundingClientRect(); const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (canvas.width !== Math.round(rect.width*dpr) || canvas.height !== Math.round(rect.height*dpr)) { canvas.width = Math.round(rect.width*dpr); canvas.height = Math.round(rect.height*dpr); }
    const ctx = canvas.getContext("2d"); ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,rect.width,rect.height);
    const round = crashEngine.round; const maxVisual = Math.max(2, round.currentMultiplier); const progress = round.status === "countdown" ? 0 : clamp(Math.log(round.currentMultiplier)/Math.log(maxVisual+1),0,.92);
    const startX = 18, startY = rect.height-22, endX = startX + (rect.width-38) * Math.max(.03,progress), endY = startY - (rect.height-55) * Math.pow(Math.max(.03,progress),.78);
    const gradient = ctx.createLinearGradient(startX,startY,endX,endY); gradient.addColorStop(0,"#c30f45"); gradient.addColorStop(1, round.status === "crashed" ? "#ff294f" : "#ff4c8b");
    ctx.strokeStyle = gradient; ctx.lineWidth = 3; ctx.shadowColor = "rgba(255,48,113,.65)"; ctx.shadowBlur = 12; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(startX,startY); ctx.bezierCurveTo(startX+(endX-startX)*.35,startY,endX-(endX-startX)*.25,endY+22,endX,endY); ctx.stroke();
    ctx.save();
    ctx.translate(endX,endY);
    ctx.rotate(-.42);
    ctx.shadowColor = "rgba(255,94,145,.72)";
    ctx.shadowBlur = 14;
    ctx.font = "26px 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("🚀",0,0);
    ctx.restore();
  }

  function init() {
    initializeTelegram();
    if (!state.liveDrops.length) seedDrops();
    renderShell(); scheduleDrops(); startClock();
    window.addEventListener("beforeunload", storage.save);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
