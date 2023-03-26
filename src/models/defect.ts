export interface DefectModel {
	defectId?: string;
	givenId?: string;
	// project?: Pick<ProjectModel, 'name' | 'id'>;
	// issueType?: DefectIssueNameType;
	// assignee?: Pick<UserModel, 'userId' | 'fullName'>;
	// title?: string;
	// foundInSoftwareRevision?: string;
	// components?: string;
	// priority?: 'low' | 'medium' | 'high';
	// status: DefectStatusNameType;
	// createdAt?: string;
	// createdBy?: string;
	// updatedAt?: string;
	// updatedBy?: string;
	// reporter?: Pick<UserModel, 'userId' | 'fullName'>;
	description?: string;
	softwareRevisionOfFix?: string;
	justification?: string;
	userReportId?: string;
}
