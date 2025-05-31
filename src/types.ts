export type TallyaOptions = {
  /**
   * Custom bucket thresholds (e.g. [0, 10, 100, 300, 1000])
   */
  buckets?: number[];

  /**
   * Suffix appended to bucket label (e.g. '+', '~', '')
   * @default '+'
   */
  suffix?: string;

  /**
   * Use compact notation for thousands+ (e.g. '1K' instead of '1000')
   * @default true
   */
  compact?: boolean;

  /**
   * Show exact count instead of a bucket
   * @default 'approx'
   */
  mode?: "approx" | "exact";

  /**
   * Locale to use for formatting (e.g. 'en-US', 'fr-FR')
   * @default 'en-US'
   */
  locale?: string;
};
