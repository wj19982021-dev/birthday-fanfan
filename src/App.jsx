import './App.css'

function App() {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '100vh', background: '#f6efe1' }}>
      <h1 style={{ color: '#2f2a24', fontSize: '42px', fontFamily: '"STKaiti", "KaiTi", serif', marginBottom: '20px' }}>
        风起小笺
      </h1>
      <p style={{ color: '#6f6253', fontSize: '16px', lineHeight: '2' }}>
        给小范同学的一份生日祝福
      </p>
      <div style={{ marginTop: '40px', padding: '30px', background: 'white', borderRadius: '8px', maxWidth: '360px', margin: '40px auto' }}>
        <p style={{ color: '#2f2a24', fontSize: '18px', lineHeight: '2' }}>
          小范同学，<br/>
          生日快乐。
        </p>
      </div>
    </div>
  )
}

export default App
