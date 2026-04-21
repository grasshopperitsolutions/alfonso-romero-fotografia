## Brief overview
Guidelines for managing translations and language updates in the Alfonso Romero Fotografía project, ensuring all languages are properly verified and maintained.

## Translation verification process
- Always verify translations against the source language before deployment
- Use automated tools to check for missing or incomplete translations
- Test all UI elements, including buttons, navigation, and form fields in each language
- Verify that date formats, number formats, and currency symbols are correct for each locale

## Language update workflow
- When adding new content, immediately create translation entries for all supported languages
- Use the existing i18n.js configuration as the source of truth for available languages
- Update the locales directory structure to match any new language additions
- Run translation consistency checks after any content changes

## Quality assurance standards
- Ensure translations maintain the original meaning and tone
- Check for proper grammar and spelling in each language
- Verify that translated text fits within UI constraints (no overflow or truncation)
- Test right-to-left languages if supported to ensure proper layout

## Integration with existing setup
- Follow the existing i18n.js configuration patterns when adding new languages
- Use the same translation key structure as existing content
- Maintain consistency with the current translation file format
- Test the application in each language using the browser's language settings

## Translation maintenance
- Regularly review and update outdated translations
- Monitor for translation drift between languages
- Keep translation files organized and well-commented
- Document any language-specific quirks or requirements