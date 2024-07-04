import React from "react";

const Timesheets2 = () => {
  return (
    <div>
      <Accordion
        key={key}
        className={classes.newCustomAccordion}
        expanded={expanded === `panel${key}`}
        onChange={handleChange(`panel${key}`)}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.AccordionSummary}
        >
          <Grid
            container
            lg={12}
            md={12}
            sm={12}
            xs={12}
            textAlign="center"
            alignItems="center"
          >
            <Grid item lg={4.5} md={4} sm={4} xs={4.5} textAlign="start">
              <Box display="flex" alignItems="center" gap={2}>
                <Box sx={{ position: "relative", display: "flex" }}>
                  <CircularProgress
                    variant="determinate"
                    value={place.profile_progress}
                    size="3.8rem"
                    thickness={2}
                    sx={{
                      backgroundColor: "#F2F2F2",
                      color:
                        place.profile_progress >= 76
                          ? "green"
                          : place.profile_progress <= 75 &&
                            place.profile_progress >= 51
                          ? "yellow"
                          : place.profile_progress < 50
                          ? "#FFBF00"
                          : "",
                      borderRadius: "100%",
                    }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        padding: "3px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <HtmlTooltip
                        placement="bottom"
                        arrow
                        title={
                          <React.Fragment>
                            <Box>
                              <Typography
                                className={classes.profileTooltipText}
                              >
                                {`Profile Completion - ${place.profile_progress}%`}
                              </Typography>
                            </Box>
                          </React.Fragment>
                        }
                      >
                        <Avatar
                          alt={place.employee_name}
                          src={place.profile_picture_url}
                          sx={{ width: 50, height: 50 }}
                        />
                      </HtmlTooltip>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  {place.status == "In Active" ? (
                    <Text mediumBoldBlack style={{ margin: "4px 0" }} noWrap>
                      {place.employee_name === "" ? (
                        "--"
                      ) : capitalizeAndAddSpace(place.employee_name).length >
                        20 ? (
                        <HtmlTooltip
                          title={capitalizeAndAddSpace(place.employee_name)}
                          placement="right"
                          arrow
                        >
                          {capitalizeAndAddSpace(place.employee_name).slice(
                            0,
                            20
                          ) +
                            (capitalizeAndAddSpace(place.employee_name).length >
                            20
                              ? "..."
                              : "")}
                        </HtmlTooltip>
                      ) : (
                        capitalizeAndAddSpace(place.employee_name)
                      )}
                      {place.e_verified ? (
                        <HtmlTooltip
                          title="Profile Has Been E-Verified"
                          placement="right"
                          arrow
                        >
                          <img
                            src={disableVerified}
                            alt="svg"
                            style={{ margin: "0px 6px -5px 6px" }}
                          />
                        </HtmlTooltip>
                      ) : null}
                      <HtmlTooltip
                        title="Profile Has Been E-Verified"
                        placement="right"
                        arrow
                      >
                        <img
                          src={Component87}
                          alt="svg"
                          style={{ margin: "0px 6px -5px 6px" }}
                        />
                      </HtmlTooltip>
                    </Text>
                  ) : (
                    <Text mediumBoldBlack noWrap>
                      {place.employee_name === "" ? (
                        "--"
                      ) : capitalizeAndAddSpace(place.employee_name).length >
                        20 ? (
                        <HtmlTooltip
                          title={capitalizeAndAddSpace(place.employee_name)}
                          placement="right"
                          arrow
                        >
                          {capitalizeAndAddSpace(place.employee_name).slice(
                            0,
                            20
                          ) +
                            (capitalizeAndAddSpace(place.employee_name).length >
                            20
                              ? "..."
                              : "")}
                        </HtmlTooltip>
                      ) : (
                        capitalizeAndAddSpace(place.employee_name)
                      )}
                      {/* {place.e_verified ? */}
                      <HtmlTooltip
                        title="Profile Has Been E-Verified"
                        placement="right"
                        arrow
                      >
                        <img
                          src={Component87}
                          alt="svg"
                          style={{ margin: "0px 6px -5px 6px" }}
                        />
                      </HtmlTooltip>
                      {/* : null} */}
                    </Text>
                  )}
                  <Text mediumLabel noWrap style={{ margin: "4px 0" }}>
                    {" "}
                    {place.employee_reference_id
                      ? place.employee_reference_id
                      : "--"}{" "}
                    &#128900;{" "}
                    {place.placement_reference_id
                      ? place.placement_reference_id
                      : "--"}
                  </Text>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} textAlign={"start"}>
              <Text smallBoldBlack noWrap>
                {place.client_name === "" ? (
                  "--"
                ) : capitalizeAndAddSpace(place.client_name).length > 16 ? (
                  <HtmlTooltip
                    title={capitalizeAndAddSpace(place.client_name)}
                    placement="right"
                    arrow
                  >
                    {capitalizeAndAddSpace(place.client_name).slice(0, 16) +
                      (capitalizeAndAddSpace(place.client_name).length > 16
                        ? "..."
                        : "")}
                  </HtmlTooltip>
                ) : (
                  capitalizeAndAddSpace(place.client_name)
                )}
              </Text>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={1} textAlign={"start"}>
              <Text smallBoldBlack noWrap>
                {place.start_date ? place.start_date : "--"}
              </Text>
            </Grid>
            <Grid container lg={3} md={2.5} sm={3} xs={3} textAlign={"start"}>
              <Stack
                direction="row"
                useFlexGap
                width="80%"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{ height: "50px" }}
                  />
                }
                spacing={3}
                textAlign="center"
                alignItems="center"
              >
                <Grid item lg={6} md={6} sm={6} xs={6} textAlign={"start"}>
                  <Text smallBoldBlack noWrap>
                    {place.end_date ? place.end_date : "Current Date"}
                  </Text>
                </Grid>

                <Grid item lg={6} md={6} sm={6} xs={6}>
                  {place.status == "In Active" ? (
                    <Box className={classes.inActiveBox}>
                      <Text mediumBoldWhite>Inactive</Text>
                    </Box>
                  ) : (
                    <Box className={classes.activeBox}>
                      <Text mediumBoldWhite>Active</Text>
                    </Box>
                  )}
                </Grid>
              </Stack>
            </Grid>

            <Grid item lg={1.5} md={3}>
              {LocalStorage.getUserData().super_admin ||
              (rolePermission !== "" &&
                rolePermission.some(
                  (item) =>
                    item.slug == "placement_view" && item.is_allowed == true
                )) ? (
                <Typography
                  onClick={() => {
                    LocalStorage.removeEmployeeVerifyId();
                  }}
                  component={Link}
                  to={`/placements/view-placement`}
                  state={{ id: place.employee_id, placement_id: place.id }}
                  className={classes.linkText}
                >
                  View Placement
                </Typography>
              ) : (
                <Text defaultmediumText noWrap>
                  View Placement
                </Text>
              )}
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.AccordionDetails} pt={1}>
            <Box width={"100%"}>
              <Typography className={classes.text1}>Timesheet Cycle</Typography>
              <Typography my={1} className={classes.text2}>
                {place.timesheet_cycle ? place.timesheet_cycle : "--"}
              </Typography>
            </Box>
            <Box width={"100%"}>
              <Typography className={classes.text1}>
                Pay Rate (Hourly)
              </Typography>
              <Typography my={1} className={classes.text2}>
                {place.pay_rate ? place.pay_rate : "--"}
              </Typography>
            </Box>
            <Box width={"100%"}>
              <Typography className={classes.text1}>Bill Rate</Typography>
              <Typography my={1} className={classes.text2}>
                {place.bill_rate ? place.bill_rate : "--"}
              </Typography>
            </Box>
            <Box width={"100%"}>
              <Typography className={classes.text1}>Recruiter Name</Typography>
              <Typography my={1} className={classes.text2}>
                {place.recruiter_name === "" ? (
                  "--"
                ) : capitalizeAndAddSpace(place.recruiter_name).length > 16 ? (
                  <HtmlTooltip
                    title={capitalizeAndAddSpace(place.recruiter_name)}
                    placement="right"
                    arrow
                  >
                    {capitalizeAndAddSpace(place.recruiter_name).slice(0, 16) +
                      (capitalizeAndAddSpace(place.recruiter_name).length > 16
                        ? "..."
                        : "")}
                  </HtmlTooltip>
                ) : (
                  capitalizeAndAddSpace(place.recruiter_name)
                )}
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Timesheets2;
