import React from "react";
import { IDataPanel, IDataPanelData, IDataPanelValue } from "./dataPanel.model";
import { DATA_PANEL_MODE } from "./constant";

const DataPanel: React.FC<IDataPanel> = ({ config, data }) => {
  // Render values in ROWS mode
  const renderRowValues = (values: IDataPanelValue[]) =>
    values?.map((value, valueIndex) => (
      <div key={valueIndex} className="field grid">
        <label className="col-12 mb-3 md:col-3 md:mb-0">
          <span className="capitalize-first">{value.label}</span>
        </label>
        <div className="pl-3 col-12 md:col-9 relative">{value.value}</div>
      </div>
    ));

  // Render values in COLUMN mode
  const renderColumnValues = (values: IDataPanelValue[]) =>
    values?.map((value, valueIndex) => (
      <div key={valueIndex} className="field flex justify-content-between">
        <label className="col-6 p-0 ">
          <span className="capitalize-first">{value.label}</span>
        </label>
        <div className="col-6 p-0 pl-3 relative">{value.value}</div>
      </div>
    ));

  if (config.mode === DATA_PANEL_MODE.ROWS) {
    return (
      <div>
        {data.map((row: IDataPanelData, index: number) => (
          <div key={index}>
            {row.header && (
              <div>
                <div className="capitalize-first">{row.header}</div>
                <hr />
              </div>
            )}
            <div className="mr-4">{renderRowValues(row.values)}</div>
            {/* Render divider only between rows */}
            {data.length > 1 && <hr className="m-0 mb-2" />}
          </div>
        ))}
      </div>
    );
  }

  // COLUMN mode
  return (
    <div className="flex">
      {data.map((row: IDataPanelData, index: number) => (
        <div key={index} className="col-4 p-0 pr-2">
          {row.header && (
            <div>
              <div className="capitalize-first">{row.header}</div>
              <hr className="m-0 mb-2" />
            </div>
          )}
          <div className="mr-4">{renderColumnValues(row.values)}</div>
        </div>
      ))}
    </div>
  );
};

export default DataPanel;
