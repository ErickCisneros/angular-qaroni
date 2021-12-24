export interface GroupsResponse {
  count: number;
  included?: null;
  input: string;
  result?: GroupsResultEntity[] | null;
  links?: null;
}
export interface GroupsResultEntity {
  merchantId: number;
  serieId: number;
  templateUUID?: string | null;
  associationType: string;
  associatedGroupId?: null;
  status: string;
  position: number;
  type: string;
  isPaid: boolean;
  isPartner: boolean;
  hasApproval: boolean;
  hasPartner: boolean;
  name: string;
  description?: string | null;
  slug: string;
  groupId: number;
  imageUrl?: string | null;
  category?: GroupsCategory | null;
  serie: GroupsSerie;
}
export interface GroupsCategory {
  language: string;
  slug: string;
  name: string;
  description?: string | null;
}
export interface GroupsSerie {
  preffix: string;
  creationDate: string;
  lastUpdateDate: string;
  serieId: number;
}
