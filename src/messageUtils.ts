export function queueMessageIfEnabled(user: Pokemon, message: string) {
  if (!user.scene.skipAfterAttackMessages) {
    user.scene.queueMessage(message);
  }
}
