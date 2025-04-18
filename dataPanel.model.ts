export interface IDataPanelValue {
  label: string;
  value: string | number | null;
}

export interface IDataPanelData {
  header?: string;
  values: IDataPanelValue[];
}

export interface IDataPanel {
  config: {
    mode: string;
  };
  data: IDataPanelData[];
  isHeaderBold?: boolean;
}
