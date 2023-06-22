export function settingsParser(metadata: string) {
  const setting = JSON?.parse(metadata ?? '')
  return setting as App.Module.SettingMetadataProps
}
