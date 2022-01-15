using {sap.ui.riskmanagement as my} from '../db/schema';

@path : 'service/risk'
service RiskService {
  //  entity Risks as projection on my.Risks;
  entity Risks @(restrict : [
    {
      grant : ['READ'],
      to    : ['RiskViewer']
    },
    {
      grant : ['*'],
      to    : ['RiskManager']
    }
  ]) as projection on my.Risks;

  annotate Risks with @odata.draft.enabled;

  //  entity Mitigations as projection on my.Mitigations;
  entity Mitigations @(restrict : [
    {
      grant : ['READ'],
      to    : ['RiskViewer']
    },
    {
      grant : ['*'],
      to    : ['RiskManager']
    }
  ]) as projection on my.Mitigations;

  annotate Mitigations with @odata.draft.enabled;
}

/*
@path: 'service/risk'
service RiskService {
  entity Risks as projection on my.Risks;
    annotate Risks with @odata.draft.enabled;
  entity Mitigations as projection on my.Mitigations;
    annotate Mitigations with @odata.draft.enabled;
}
*/