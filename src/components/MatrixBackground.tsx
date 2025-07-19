export default function MatrixBackground() {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,255,255,0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(255,0,255,0.1) 0%, transparent 50%),
                         radial-gradient(circle at 50% 50%, rgba(0,255,0,0.05) 0%, transparent 50%)`
      }} />
    </div>
  )
} 