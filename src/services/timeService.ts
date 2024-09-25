export const getCurrentTime = (): string => {
  const currentTime = new Date();
  return `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
};