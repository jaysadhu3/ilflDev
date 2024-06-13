USE [ilfl]
GO
SET IDENTITY_INSERT [dbo].[IFSSSection] ON 
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (1, NULL, N'About Group', N'', 1)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (2, NULL, N'About ilfl', N'About', 1)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (3, NULL, N'Contact Us', N'Contact-Us', 1)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (4, NULL, N'Investors Relations', N'Investors-Relations', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (5, 4, N'Annual Report', N'Annual-Report', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (6, 4, N'Audited Accounts of Subsidiaries', N'Audited-Accounts-Of-Subsidiaries', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (7, 4, N'E-Voting Results', N'E-Voting-Results', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (8, 4, N'Notice to Shareholders', N'Notice-To-Shareholders', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (9, 4, N'Transfer of Shares to IEPF', N'Transfer-Of-Shares-To-iepf', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (10, 4, N'Unclaimed Dividend', N'Unclaimed-Dividend', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (11, 4, N'Corporate Overview', N'Corporate-Overview', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (12, 4, N'Form MGT 7', N'Form-MGT-7', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (13, 11, N'Board of Directors', N'Board-Of-Directors', 1)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (14, 11, N'Resignation of Directors', N'Resignation-Of-Director', 0)
GO
INSERT [dbo].[IFSSSection] ([IFSSId], [IFSSParent], [IFSSName], [IFSSPath], [IFSSIsPageEditable]) VALUES (24, 11, N'Corporate Social Responsibility Policy', N'Corporate-Social-Responsibility', 0)
GO
SET IDENTITY_INSERT [dbo].[IFSSSection] OFF
GO
SET IDENTITY_INSERT [dbo].[IFCTContent] ON 
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (1, 5, N'2009-10', NULL, N'annual-report-2009-10.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (2, 5, N'2010-11', NULL, N'annual-report-2010-11.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (3, 5, N'2011-12', NULL, N'annual-report-2011-12.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (4, 5, N'2012-13', NULL, N'annual-report-2012-13.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (5, 5, N'2013-14', NULL, N'annual-report-2013-14.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (6, 5, N'2014-15', NULL, N'annual-report-2014-15.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (7, 5, N'2015-16', NULL, N'annual-report-2015-16.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (8, 5, N'2016-17', NULL, N'annual-report-2016-17.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (9, 5, N'2017-18', NULL, N'annual-report-2017-18.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (10, 5, N'2018-19', NULL, N'annual-report-2018-19.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (11, 5, N'2019-20', NULL, N'annual-report-2019-20.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (12, 5, N'2020-21', NULL, N'annual-report-2020-21.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (13, 5, N'2021-22', NULL, N'annual-report-2021-22.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (14, 5, N'2022-23', NULL, N'ilfl-annual-report-2022-23.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (15, 6, N'GFCL ANNUAL REPORT 2019-20', NULL, N'gfl-annual-report-2019-20.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (16, 6, N'IWEL ANNUAL REPORT 2020-21', NULL, N'inox-wind-energy-limited-annual-report-2020-21.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (17, 6, N'GFCL ANNUAL REPORT 2020-21', NULL, N'gujarat-fluorochemicals-limited-annual-report-2020-21.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (18, 6, N'IWEL ANNUAL REPORT 2021-22', NULL, N'inox-wind-energy-limited-annual-report-2021-22.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (19, 6, N'GFCL ANNUAL REPORT 2021-22', NULL, N'gujarat-fluorochemicals-limited-annual-report-2021-22.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (20, 6, N'IWEL ANNUAL REPORT 2022-23', NULL, N'Inox Wind Energy Limited AR 2022-23.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (21, 6, N'GFCL ANNUAL REPORT 2022-23', NULL, N'Gujarat Fluorochremicals Limited ANNUAL REPORT 2022-23.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (22, 7, N'E VOTING RESULTS-2015', NULL, N'e-voting-results-2015.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (23, 7, N'E VOTING RESULTS-2016', NULL, N'e-voting-results-2016.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (24, 7, N'E VOTING RESULTS-2017', NULL, N'e-voting-results-2017.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (25, 7, N'E VOTING RESULTS-2018', NULL, N'e-voting-results-2018.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (26, 7, N'E VOTING RESULTS-2019', NULL, N'e-voting-results-2019.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (27, 7, N'E VOTING RESULTS-2020', NULL, N'e-voting-results-2020.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (28, 7, N'E VOTING RESULTS-2021', NULL, N'e-voting-results-2021.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (29, 7, N'E VOTING RESULTS-2022', NULL, N'e-voting-results-2022.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (30, 7, N'E VOTING RESULTS-2023', NULL, N'Scrutinizer Report-AGM-2023.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (31, 8, N'NOTICE FOR AGM 2013-14', NULL, N'notice-for-agm-2013-14.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (32, 8, N'NOTICE FOR AGM 2014-15', NULL, N'notice-for-agm-2014-15.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (33, 8, N'NOTICE FOR AGM 2015-16', NULL, N'notice-for-agm-2015-16.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (34, 8, N'NOTICE FOR AGM 2016-17', NULL, N'notice-for-agm-2016-17.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (35, 8, N'NOTICE FOR AGM 2017-18', NULL, N'notice-for-agm-2017-18.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (36, 8, N'NOTICE FOR AGM 2018-19', NULL, N'notice-for-agm-2018-19.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (37, 8, N'NOTICE FOR AGM 2019-20', NULL, N'notice-for-agm-2019-20.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (38, 8, N'NOTICE FOR AGM 2020-21', NULL, N'notice-for-agm-2020-21.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (39, 8, N'NOTICE FOR EOGM 2021-22', NULL, N'notice-for-eogm-2021-22.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (40, 8, N'NOTICE FOR AGM 2021-22', NULL, N'notice-for-agm-2021-22.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (41, 8, N'NOTICE FOR EOGM 2022-23', NULL, N'EOGM NOTICE.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (42, 8, N'NOTICE FOR AGM 2022-23', NULL, N'ilfl-agm-notice-2022-23.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (43, 9, N'List of shares transferred on 08th December, 2017', NULL, N'list-of-shares-transferred-on-8-dec-2017.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (44, 9, N'List of shares transferred on 03rd December, 2018', NULL, N'list-of-shares-transferred-on-03-dec-2018.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (45, 9, N'List of shares transferred on 29th September, 2020', NULL, N'list-of-shares-transferred-on-29-sep-2020.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (46, 9, N'Intimation for shares to be transferred in November, 2017', NULL, N'intimation-for-shares-to-be-transferred-in-nov-2017.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (47, 9, N'Intimation for shares to be transferred in November, 2018', NULL, N'intimation-for-shares-to-be-transferred-in-nov-2018.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (48, 9, N'Intimation for shares to be transferred in September, 2020', NULL, N'intimation-for-shares-to-be-transferred-in-sep-2020.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (49, 10, N'INTERIM DIVIDEND 2017-18', NULL, N'INTERIM-DIVIDEND-2017-18.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (52, 10, N'INTERIM DIVIDEND 2018-19', NULL, N'INTERIM-DIVIDEND-2018-19.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (53, 10, N'FINAL DIVIDEND 2018-19', NULL, N'FINAL-DIVIDEND-2018-19.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (54, 10, N'INTERIM DIVIDEND 2019-20', NULL, N'INTERIM-DIVIDEND-2019-20.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (55, 10, N'INTERIM DIVIDEND 2020-21', NULL, N'INTERIM-DIVIDEND-2020-21.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (56, 10, N'INTERIM DIVIDEND 2022-23', NULL, N'INTERIM-DIVIDEND-2022-23.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (57, 12, N'2021', NULL, N'form-mgt-7-2021.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (58, 12, N'2022', NULL, N'form-mgt-7-2022.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (59, 12, N'2023', NULL, N'Annual Return MGT 7 2023.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (60, 24, N'CSR Activities for 2021-22', NULL, N'Report on CSR Activities 2021-22.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (61, 24, N'CSR Committee of Directors', NULL, N'ilfl-csr-committee-of-directors.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (62, 24, N'Corporate Social Responsibility (CSR) Policy', NULL, N'ilfl-csr-policy.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (67, 14, N'Mr. Pavan Kumar Jain', N'Managing Director', N'resignation-of-director-pavan-kumar-jain.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (68, 14, N'Mr. Siddharth Jain', N'Director', N'resignation-of-director-siddharth-jain.pdf')
GO
INSERT [dbo].[IFCTContent] ([IFCTId], [IFCT_IFSS], [IFCTDisplayName], [IFCTDescription], [IFCTFile]) VALUES (69, 14, N'Mr. Deepak Asher', N'Whole-time Director', N'resignation-of-director-deepak-asher.pdf')
GO
SET IDENTITY_INSERT [dbo].[IFCTContent] OFF
GO
