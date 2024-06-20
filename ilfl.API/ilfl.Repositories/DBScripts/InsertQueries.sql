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
SET IDENTITY_INSERT [dbo].[IFPCPageContent] ON 
GO
INSERT [dbo].[IFPCPageContent] ([IFPCId], [IFPC_IFSSId], [IFPC_Content_1], [IFPC_Content_2], [IFPC_Content_3], [IFPC_Content_4], [IFPC_Content_5], [IFPC_Content_6], [IFPC_Content_7]) VALUES (14, 1, N'<h1><strong><span style="color:var(--theme-pink);"><span style="background-color:rgb(255, 255, 255);">INOXGFL GROUP</span></span></strong></h1><p></p><p style="text-align:start"><span style="color:rgb(33, 37, 41);"><span style="background-color:rgb(255, 255, 255);">INOXGFL Group is an Indian conglomerate with a legacy of more than 90 years. The group is a forerunner in diversified business segments comprising Fluoropolymers, Specialty Chemicals, Wind Energy, and Renewables. With a strong workforce and a distribution network spread across the globe, each INOXGFL Group company is characterized by the growth DNA of the Group that can be encapsulated in the following.</span></span></p><ul><li><p><span style="color:rgb(33, 37, 41);"><span style="background-color:rgb(255, 255, 255);">Early Identification of a Winning Business Area</span></span></p></li><li><p><span style="color:rgb(33, 37, 41);"><span style="background-color:rgb(255, 255, 255);">Building up scale rapidly</span></span></p></li><li><p><span style="color:rgb(33, 37, 41);"><span style="background-color:rgb(255, 255, 255);">Market leadership in the segment</span></span></p></li></ul><h3><br><strong><span style="color:rgb(88, 42, 132);"><span style="background-color:rgb(255, 255, 255);">Major Group Companies:</span></span></strong></h3>', N'<p><span style="color:rgb(33, 37, 41);"><img src="http://localhost:4200/assets/img/gfl-logo.png" alt=""></span></p><h5><strong><span style="color:var(--theme-pink);">Gujarat Fluorochemicals Limited (GFL)</span></strong></h5><h6></h6><p style="text-align:start"><span style="color:rgb(33, 37, 41);">GFL is a leading producer of Fluoropolymers, Fluorospecialities, Refrigerants and Chemicals for applications in varied industries. GFL derives its strength from expertise in Fluorine Chemistry, vertical integration from natural minerals to Fluoropolymers and strong R&amp;D, enabling it to provide one of the best quality products meeting all regulatory compliances, to the clientele globally.</span></p>', N'<p><span style="color:rgb(33, 37, 41);"><img src="http://localhost:4200/assets/img/inox-wind-logo.png" alt=""></span></p><h5><strong><span style="color:var(--theme-pink);">Inox Wind Limited</span></strong></h5><h6></h6><p style="text-align:start"><span style="color:rgb(33, 37, 41);">Inox Wind is a fully integrated player in the wind energy market with state-of-the-art manufacturing plants at Una (Himachal Pradesh) for hubs &amp; nacelles, near Ahmedabad (Gujarat) for blades and tubular towers and an integrated manufacturing unit at Barwani district in Madhya Pradesh.</span></p><p style="text-align:start"><span style="color:rgb(33, 37, 41);">Inox Wind manufactures key components that ensure high quality, most advanced technology, reliability and cost competitiveness. Inox WTGs are designed for low wind speed sites of India, and are generating around 6% – 18% more generation viz-a-viz other WTGs models available across the nation.</span></p>', N'<h5><strong><span style="color:var(--theme-pink);">INOX WIND ENERGY LIMITED</span></strong></h5><h6></h6><p style="text-align:start"><span style="color:rgb(33, 37, 41);">Inox Wind Energy Limited was incorporated on March 6, 2020 under the Companies Act, 2013 with the objective of engaging in business of generation and sale of wind energy, providing services for Erection, Procurement and Commissioning (EPC) of wind farms and holding strategic business interest in Renewable Energy.</span></p>', N'<p><span style="color:rgb(33, 37, 41);"><img src="http://localhost:4200/assets/img/gfcl-logo.png" alt=""></span></p><h5><strong><span style="color:var(--theme-pink);">GFCL EV Products Limited</span></strong></h5><h6></h6><p style="text-align:start"><span style="color:rgb(33, 37, 41);">GFCLEV is a 100% subsidiary of GFL, manufacturing intermediate materials for Lithium-ion Battery.</span></p>', N'<p><span style="color:rgb(33, 37, 41);"><img src="http://localhost:4200/assets/img/inoxgreen-logo.png" alt=""></span></p><h5><strong><span style="color:var(--theme-pink);">Inox Green Energy Services Limited</span></strong></h5><h6>  </h6><p style="text-align:start"><span style="color:rgb(33, 37, 41);">IGESL is India''s leading wind O&amp;M services player with more than 8 years of operating history.</span></p>', N'<p></p>')
GO
INSERT [dbo].[IFPCPageContent] ([IFPCId], [IFPC_IFSSId], [IFPC_Content_1], [IFPC_Content_2], [IFPC_Content_3], [IFPC_Content_4], [IFPC_Content_5], [IFPC_Content_6], [IFPC_Content_7]) VALUES (15, 2, N'<p><span style="color:rgb(33, 37, 41);"><span style="background-color:rgb(255, 255, 255);">Inox Leasing and Finance Limited (ILFL) was incorporated on February 17, 1995 as Inox Leasing and Finance Private Limited (ILFL) and subsequently became a public company with effect from January 28, 1998.</span></span></p><p style="text-align:start"><span style="color:rgb(33, 37, 41);"><span style="background-color:rgb(255, 255, 255);">The main business of ILFL is to conduct the business as a finance company including financing industrial, commercial and business operations by means of loans, leasing, hiring and hire purchases, dealing in shares and securities. ILFL, being an investment company, is engaged in the business of financing and investments in equity shares of the companies. ILFL has obtained certificate of registration to carry on the business of a non-banking finance institution from Reserve Bank of India. ILFL is registered with Association of Mutual Funds of India (AMFI) as a mutual fund advisor and gets brokerage income on distribution of units in mutual funds.</span></span></p>', N'<p></p>', N'<p></p>', N'<p></p>', N'<p></p>', N'<p></p>', N'<p></p>')
GO
INSERT [dbo].[IFPCPageContent] ([IFPCId], [IFPC_IFSSId], [IFPC_Content_1], [IFPC_Content_2], [IFPC_Content_3], [IFPC_Content_4], [IFPC_Content_5], [IFPC_Content_6], [IFPC_Content_7]) VALUES (16, 3, N'<p><strong><span style="color:var(--bs-heading-color,inherit);"><span style="background-color:rgb(255, 255, 255);">Address</span></span></strong></p><p><span style="background-color:rgb(255, 255, 255);">Inox Leasing and Finance Limited<br>INOXGFL Group,<br>612-618, Narain Manzil, 6th Floor,<br>23, Barakhamba Road,<br>New Delhi - 110001.</span></p><p><strong><span style="color:var(--bs-heading-color,inherit);">Phone</span></strong></p><p><a href="tel:+9101123327860"><span style="color:var(--black);">+91(011) 23327860 </span></a>/ <a href="tel:+9101123324796"><span style="color:var(--black);">23324796</span></a></p><p><strong><span style="color:var(--bs-heading-color,inherit);">Fax</span></strong></p><p>+91(011) 23355833</p><p><strong><span style="color:var(--bs-heading-color,inherit);">E-mail</span></strong></p><p><a href="mailto:inoxgroup@gfl.co.in"><span style="color:var(--black);">inoxgroup@</span></a><a href="gfl.co.in" target="_blank"><span style="color:var(--black);">gfl.co.in</span></a></p>', N'<p></p>', N'<p></p>', N'<p></p>', N'<p></p>', N'<p></p>', N'<p></p>')
GO
INSERT [dbo].[IFPCPageContent] ([IFPCId], [IFPC_IFSSId], [IFPC_Content_1], [IFPC_Content_2], [IFPC_Content_3], [IFPC_Content_4], [IFPC_Content_5], [IFPC_Content_6], [IFPC_Content_7]) VALUES (17, 13, N'<h5><strong><span style="color:var(--theme-violet);">Mr. Devendra Kumar Jain (Chairman)</span></strong></h5><p> </p><p style="text-align:start"><span style="color:rgb(33, 37, 41);">Mr. Devendra Kumar Jain, Chairman, is a graduate in History (Hons.) from St. Stephens College, Delhi, possesses over 50 years of rich experience in business management and international trade. In recognition of his successful efforts to increase bilateral trade with Commonwealth countries, he was granted a Dignity of an Honorary Member of the Civil Division in the Order of the British Empire by Her Majesty, the Queen of England. Shri Devendra Kumar Jain has been a member of the Indian National Committee of the International Chamber of Commerce and has been an Associate Member of the World Economic Forum, Geneva, Switzerland and a member of the Indian delegation to the Davos symposium on several occasions in past.</span></p>', N'<h5><strong><span style="color:var(--theme-violet);">Mr. Vivek Kumar Jain Director</span></strong></h5><p></p><p style="text-align:start"><span style="color:rgb(33, 37, 41);">Mr. Vivek Kumar Jain is a graduate of Commerce from St Stephens College Delhi and also has a post graduate degree in Business Administration from the Indian Institute of Management Ahmedabad. He has over 34 years of rich business experience in setting up and managing several busineses.</span></p>', N'<h5><strong><span style="color:var(--theme-violet);">Mr. Devansh Jain Director</span></strong></h5><p></p><p style="text-align:start"><span style="color:rgb(33, 37, 41);">Mr. Devansh Jain is Whole-time Director of Inox Wind Limited. He has over 7 years of work experience in various management positions and has been spearheading Inox Group''s foray into the wind energy sector.</span></p><p style="text-align:start"><span style="color:rgb(33, 37, 41);">He is on the National Council of Indian Wind Power Association and Honorary Secretary of Indian Wind Turbine Manufacturers Association. He has a Double major degree in economics and business administration from Carnegie Mellon University, Pittsburgh, USA.</span></p>', N'<p></p>', N'<p></p>', N'<p></p>', N'<p></p>')
GO
SET IDENTITY_INSERT [dbo].[IFPCPageContent] OFF
GO
