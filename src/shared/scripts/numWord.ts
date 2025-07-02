export default function numWord(value: number) {
  value = Math.abs(value) % 100
  const num = value % 10
  if (value > 10 && value < 20) return 'ев'
  if (num > 1 && num < 5) return 'а'
  if (num == 1) return ''
  return 'ев'
}
