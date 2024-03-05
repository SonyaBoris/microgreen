const baseUrl = "https://api.telegram.org/bot7125995792:AAG0ycNh27AYJcuFHlL1dPIqa_ubcBNX0u4/"

export const sendMessage = async (message) => {
  const url = `${baseUrl}sendMessage?chat_id=-1002077738030&text=${message}`;

  const response = await fetch(url)

  if (!response.ok) {
    const error = await response.json()
    await console.error(error)
  }
}