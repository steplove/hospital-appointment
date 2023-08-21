import React, { useState, useEffect } from 'react';

function LiffComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [os, setOS] = useState('');
  const [language, setLanguage] = useState('');
  const [version, setVersion] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [isInClient, setIsInClient] = useState(false);
  // ... ประกาศ state อื่นๆ ที่คุณต้องการใช้

  useEffect(() => {
    import('@line/liff').then(async (liff) => {
      const liffId = '2000414649-29Q1LMp4';
      await liff.default.init({ liffId });
      if (liff.default.isLoggedIn()) {
        setIsLoggedIn(true);
        getEnvironment(liff.default);
        // ... ดึงข้อมูล environment และอื่นๆ จาก liff แล้วกำหนดให้กับ state
      } else {
        liff.default.login();
      }
    });
  }, []);

  async function getEnvironment(liff) {
    setOS(liff.getOS());
    setLanguage(liff.getLanguage());
    setVersion(liff.getVersion());
    setAccessToken(liff.getAccessToken());
    setIsInClient(liff.isInClient());
  }

  async function sendMsg(liff) {
    if (liff.getContext().type !== 'none') {
      const now = Date.now();
      await liff.sendMessages([
        {
          type: 'sticker',
          stickerId: 1,
          packageId: 1,
        },
        {
          type: 'text',
          text: `Current timestamp: ${now}`,
        },
      ]);
      alert('Message sent date: ' + new Date(now));
    }
  }

  async function scanCode(liff) {
    const result = await liff.scanCode();
    alert('Scanned code: ' + result.value);
  }

  async function getUserProfile(liff) {
    const profile = await liff.getProfile();
    // ทำตามความต้องการของคุณ เช่น แสดงผลใน state หรือแสดงผลใน Alert
  }

  async function getFriendship(liff) {
    const friend = await liff.getFriendship();
    if (!friend.friendFlag) {
      if (window.confirm('คุณยังไม่ได้เพิ่ม BOT เป็นเพื่อน จะเพิ่มเลยมั้ย')) {
        window.location = 'https://line.me/R/ti/p/%40qweqweqwe';
      }
    }
  }

  async function createUniversalLink(liff) {
    const link1 = liff.permanentLink.createUrl();
    // ทำตามความต้องการของคุณ เช่น แสดงผลใน state หรือแสดงผลใน Alert
  }

  // ... ฟังก์ชันอื่นๆ เช่น getUserProfile, getFriendship, createUniversalLink

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>OS: {os}</p>
          <p>Language: {language}</p>
          <p>Version: {version}</p>
          <p>AccessToken: {accessToken}</p>
          <p>isInClient: {isInClient.toString()}</p>
          {/* ... แสดงผล state อื่นๆ ตามที่คุณต้องการ */}
          <button onClick={sendMsg}>Send Message</button>
          <button onClick={scanCode}>Scan Code</button>
          <button onClick={getUserProfile}>Get User Profile</button>
          <button onClick={getFriendship}>Get Friendship</button>
          <button onClick={createUniversalLink}>Create Universal Link</button>
          {/* ... */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LiffComponent;
